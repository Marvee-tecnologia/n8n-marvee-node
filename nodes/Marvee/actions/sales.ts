import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros opcionais para filtros
	const startDate = this.getNodeParameter('startDate', 0, '') as string;
	const endDate = this.getNodeParameter('endDate', 0, '') as string;
	const clienteIdFilter = this.getNodeParameter('clienteIdFilter', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;

	// Construir query parameters
	const queryParams: any = {};

	if (startDate) {
		queryParams.data_inicio = startDate;
	}

	if (endDate) {
		queryParams.data_fim = endDate;
	}

	if (clienteIdFilter) {
		queryParams.cliente_id = clienteIdFilter;
	}

	if (status) {
		queryParams.status = status;
	}

	try {
		const response = await apiClient.get('/vendas', queryParams);
		return this.helpers.returnJsonArray(response);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao consultar vendas: ${error.message}`);
	}
}

export async function handleGetSalesById(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	const salesId = this.getNodeParameter('salesId', 0) as string;

	try {
		const response = await apiClient.get(`/vendas/${salesId}`);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao obter venda por ID: ${error.message}`);
	}
}

export async function handleUpdateSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter ID da venda
	const salesId = this.getNodeParameter('salesId', 0) as string;

	// Obter parâmetros obrigatórios
	const clienteId = this.getNodeParameter('clienteId', 0) as string;
	const produtoId = this.getNodeParameter('produtoId', 0) as string;
	const quantidade = this.getNodeParameter('quantidade', 0) as number;
	const valorUnitario = this.getNodeParameter('valorUnitario', 0) as number;
	const dataVenda = this.getNodeParameter('dataVenda', 0) as string;
	const descricao = this.getNodeParameter('descricao', 0, '') as string;

	const body = {
		cliente_id: clienteId,
		produto_id: produtoId,
		quantidade,
		valor_unitario: valorUnitario,
		data_venda: dataVenda,
		descricao,
	};

	try {
		const response = await apiClient.put(`/vendas/${salesId}`, body);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao atualizar venda: ${error.message}`);
	}
}

export async function handleDeleteSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	const salesId = this.getNodeParameter('salesId', 0) as string;

	try {
		await apiClient.delete(`/vendas/${salesId}`);
		return this.helpers.returnJsonArray([
			{ success: true, message: 'Venda deletada com sucesso', id: salesId },
		]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao deletar venda: ${error.message}`);
	}
}

export async function handleStoreSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);

	// Obter parâmetros obrigatórios
	const dataCompetencia = this.getNodeParameter('data_competencia', 0) as string;
	const tipoTomador = this.getNodeParameter('tipo_tomador', 0) as string;

	// Construir objeto base
	const body: any = {
		data_competencia: dataCompetencia,
		tipo_tomador: tipoTomador,
	};

	// Dados do tomador (quando necessário)
	if (tipoTomador !== 'ST') {
		const tomadorCnpjCpf = this.getNodeParameter('tomador_cnpj_cpf', 0) as string;

		body.tomador = {
			cnpj_cpf: tomadorCnpjCpf,
		};

		// Para pessoa física, pessoa física exterior e pessoa jurídica exterior
		if (['PF', 'PFE', 'PJE'].includes(tipoTomador)) {
			const razaoSocial = this.getNodeParameter('tomador_razao_social', 0) as string;

			if (tipoTomador === 'PF') {
				body.tomador.dados_gerais = {
					razao_social: razaoSocial,
				};

				// Campos opcionais para PF
				const email = this.getNodeParameter('tomador_email', 0, '') as string;
				const ddd = this.getNodeParameter('tomador_ddd', 0, '') as number;
				const telefone = this.getNodeParameter('tomador_telefone', 0, '') as string;

				if (email) body.tomador.dados_gerais.email = email;
				if (ddd) body.tomador.dados_gerais.ddd = ddd;
				if (telefone) body.tomador.dados_gerais.telefone = telefone;

				// Endereço (opcional para PF)
				const cep = this.getNodeParameter('tomador_cep', 0, '') as string;
				const numero = this.getNodeParameter('tomador_numero', 0, '') as number;
				const complemento = this.getNodeParameter('tomador_complemento', 0, '') as string;

				if (cep || numero || complemento) {
					body.tomador.endereco_contato = {};
					if (cep) body.tomador.endereco_contato.cep = cep;
					if (numero) body.tomador.endereco_contato.numero = numero;
					if (complemento) body.tomador.endereco_contato.complemento = complemento;
				}
			} else {
				// Para PFE e PJE
				body.tomador.razao_social = razaoSocial;
			}
		}
	}

	// Campos opcionais da venda
	const formaCobranca = this.getNodeParameter('forma_cobranca', 0, '') as string;
	const codigoReferencia = this.getNodeParameter('codigo_referencia', 0, '') as string;
	const ordemCompra = this.getNodeParameter('ordem_compra', 0, '') as string;
	const ordemServico = this.getNodeParameter('ordem_servico', 0, '') as string;
	const vendedor = this.getNodeParameter('vendedor', 0, '') as string;
	const observacoes = this.getNodeParameter('observacoes', 0, '') as string;
	const infoAdicionalNfse = this.getNodeParameter('info_adicional_nfse', 0, '') as string;

	if (formaCobranca) body.forma_cobranca = formaCobranca;
	if (codigoReferencia) body.codigo_referencia = codigoReferencia;
	if (ordemCompra) body.ordem_compra = ordemCompra;
	if (ordemServico) body.ordem_servico = ordemServico;
	if (vendedor) body.vendedor = vendedor;
	if (observacoes) body.observacoes = observacoes;
	if (infoAdicionalNfse) body.info_adicional_nfse = infoAdicionalNfse;

	// Dados do serviço (obrigatórios)
	const servicoDescricao = this.getNodeParameter('servico_descricao', 0) as string;
	const servicoQuantidade = this.getNodeParameter('servico_quantidade', 0) as number;
	const servicoValorUnitario = this.getNodeParameter('servico_valor_unitario', 0) as number;
	const servicoValorDesconto = this.getNodeParameter('servico_valor_desconto', 0) as number;
	const servicoValorAcrescimo = this.getNodeParameter('servico_valor_acrescimo', 0) as number;

	body.servico = {
		descricao: servicoDescricao,
		quantidade: servicoQuantidade,
		valor_unitario: servicoValorUnitario,
		valor_desconto: servicoValorDesconto,
		valor_acrescimo: servicoValorAcrescimo,
	};

	// Parcelas do financeiro (obrigatórias)
	const parcelas = this.getNodeParameter('financeiro_parcelas.parcela', 0, []) as Array<{
		valor: number;
		vencimento: string;
	}>;

	if (!parcelas || parcelas.length === 0) {
		throw new NodeOperationError(this.getNode(), 'É necessário informar pelo menos uma parcela');
	}

	if (parcelas.length > 48) {
		throw new NodeOperationError(this.getNode(), 'Máximo de 48 parcelas permitidas');
	}

	body.financeiro = {
		parcelas: parcelas.map((parcela) => ({
			valor: parcela.valor,
			vencimento: parcela.vencimento,
		})),
	};

	// Automação (opcional)
	const usarAutomacaoCobranca = this.getNodeParameter(
		'usar_automacao_cobranca',
		0,
		false,
	) as boolean;
	const usarAutomacaoNfse = this.getNodeParameter('usar_automacao_nfse', 0, false) as boolean;

	if (usarAutomacaoCobranca || usarAutomacaoNfse) {
		body.automacao = {};

		if (usarAutomacaoCobranca) {
			const tipoEmissaoCobranca = this.getNodeParameter(
				'automacao_cobranca_tipo_emissao',
				0,
			) as string;

			body.automacao.cobranca = {
				tipo_emissao: tipoEmissaoCobranca,
			};

			if (tipoEmissaoCobranca === 'automatic') {
				const gatilhoEmissao = this.getNodeParameter(
					'automacao_cobranca_gatilho_emissao',
					0,
				) as string;
				body.automacao.cobranca.gatilho_emissao = gatilhoEmissao;

				if (['days', 'day'].includes(gatilhoEmissao)) {
					const diaEmissao = this.getNodeParameter('automacao_cobranca_dia_emissao', 0) as number;
					body.automacao.cobranca.dia_emissao = diaEmissao;
				}
			}
		}

		if (usarAutomacaoNfse) {
			const tipoEmissaoNfse = this.getNodeParameter('automacao_nfse_tipo_emissao', 0) as string;

			body.automacao.nfse = {
				tipo_emissao: tipoEmissaoNfse,
			};

			if (tipoEmissaoNfse === 'automatic') {
				const gatilhoEmissao = this.getNodeParameter('automacao_nfse_gatilho_emissao', 0) as string;
				body.automacao.nfse.gatilho_emissao = gatilhoEmissao;

				if (gatilhoEmissao === 'scheduled_day') {
					const dataEmissao = this.getNodeParameter('automacao_nfse_data_emissao', 0) as string;
					body.automacao.nfse.data_emissao = dataEmissao;
				}
			}
		}
	}

	try {
		const response = await apiClient.post('/v1/vendas', body);
		return this.helpers.returnJsonArray([response]);
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Erro ao cadastrar venda: ${error.message}`);
	}
}
