import { IExecuteFunctions, INodeExecutionData, NodeOperationError } from 'n8n-workflow';
import { MarveeApiClient } from '../helpers/apiUtils';

export async function handleGetSales(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('marveeApi');
	const apiClient = new MarveeApiClient(credentials, this);
	const startDate = this.getNodeParameter('startDate', 0, '') as string;
	const endDate = this.getNodeParameter('endDate', 0, '') as string;
	const clienteIdFilter = this.getNodeParameter('clienteIdFilter', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	const queryParams: any = {};

	if (startDate) {
		queryParams.startDate = startDate;
	}

	if (endDate) {
		queryParams.endDate = endDate;
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
	const salesId = this.getNodeParameter('salesId', 0) as string;
	const documentId = this.getNodeParameter('document_id', 0) as number;
	const companyId = this.getNodeParameter('company_id', 0) as number;
	const body: any = {
		document_id: documentId,
		company_id: companyId,
	};
	const peopleId = this.getNodeParameter('people_id', 0, null) as number | null;
	const categoryId = this.getNodeParameter('category_id', 0, null) as number | null;
	const paymentMethodType = this.getNodeParameter('payment_method_type', 0, '') as string;
	const accountId = this.getNodeParameter('account_id', 0, null) as number | null;
	const comment = this.getNodeParameter('comment', 0, '') as string;
	const additionalInformation = this.getNodeParameter('additional_information', 0, '') as string;
	const code = this.getNodeParameter('code', 0, '') as string;
	const generationDate = this.getNodeParameter('generation_date', 0, '') as string;
	const situation = this.getNodeParameter('situation', 0, '') as string;
	const salesman = this.getNodeParameter('salesman', 0, '') as string;
	const originalValue = this.getNodeParameter('original_value', 0, null) as number | null;
	const value = this.getNodeParameter('value', 0, null) as number | null;
	const discountValue = this.getNodeParameter('discount_value', 0, null) as number | null;
	const additionalValue = this.getNodeParameter('additional_value', 0, null) as number | null;
	const codeReference = this.getNodeParameter('code_reference', 0, '') as string;
	const purchaseOrder = this.getNodeParameter('purchase_order', 0, '') as string;
	const serviceOrder = this.getNodeParameter('service_order', 0, '') as string;
	const chargeEmissionDay = this.getNodeParameter('charge_emission_day', 0, null) as number | null;
	const chargeEmissionType = this.getNodeParameter('charge_emission_type', 0, '') as string;
	const chargeEmissionTrigger = this.getNodeParameter('charge_emission_trigger', 0, '') as string;
	const nfEmissionDay = this.getNodeParameter('nf_emission_day', 0, null) as number | null;
	const nfEmissionType = this.getNodeParameter('nf_emission_type', 0, '') as string;
	const nfEmissionTrigger = this.getNodeParameter('nf_emission_trigger', 0, '') as string;
	const dataEmissao = this.getNodeParameter('data_emissao', 0, '') as string;
	const nfseJustificada = this.getNodeParameter('nfse_justificada', 0, '') as string;
	const nfseJustificativa = this.getNodeParameter('nfse_justificativa', 0, '') as string;

	if (peopleId !== null && peopleId !== 0) body.people_id = peopleId;
	if (categoryId !== null && categoryId !== 0) body.category_id = categoryId;
	if (paymentMethodType) body.payment_method_type = paymentMethodType;
	if (accountId !== null && accountId !== 0) body.account_id = accountId;
	if (comment) body.comment = comment;
	if (additionalInformation) body.additional_information = additionalInformation;
	if (code) body.code = code;
	if (generationDate) body.generation_date = generationDate;
	if (situation) body.situation = situation;
	if (salesman) body.salesman = salesman;
	if (originalValue !== null && originalValue !== 0) body.original_value = originalValue;
	if (value !== null && value !== 0) body.value = value;
	if (discountValue !== null && discountValue !== 0) body.discount_value = discountValue;
	if (additionalValue !== null && additionalValue !== 0) body.additional_value = additionalValue;
	if (codeReference) body.code_reference = codeReference;
	if (purchaseOrder) body.purchase_order = purchaseOrder;
	if (serviceOrder) body.service_order = serviceOrder;
	if (chargeEmissionDay !== null && chargeEmissionDay !== 0)
		body.charge_emission_day = chargeEmissionDay;
	if (chargeEmissionType) body.charge_emission_type = chargeEmissionType;
	if (chargeEmissionTrigger) body.charge_emission_trigger = chargeEmissionTrigger;
	if (nfEmissionDay !== null && nfEmissionDay !== 0) body.nf_emission_day = nfEmissionDay;
	if (nfEmissionType) body.nf_emission_type = nfEmissionType;
	if (nfEmissionTrigger) body.nf_emission_trigger = nfEmissionTrigger;
	if (dataEmissao) body.data_emissao = dataEmissao;
	if (nfseJustificada) body.nfse_justificada = nfseJustificada;
	if (nfseJustificativa) body.nfse_justificativa = nfseJustificativa;

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
	const dataCompetencia = this.getNodeParameter('data_competencia', 0) as string;
	const tipoTomador = this.getNodeParameter('tipo_tomador', 0) as string;
	const body: any = {
		data_competencia: dataCompetencia,
		tipo_tomador: tipoTomador,
	};
	if (tipoTomador !== 'ST') {
		const tomadorCnpjCpf = this.getNodeParameter('tomador_cnpj_cpf', 0) as string;
		body.tomador = {
			cnpj_cpf: tomadorCnpjCpf,
		};
		if (['PF', 'PFE', 'PJE'].includes(tipoTomador)) {
			const razaoSocial = this.getNodeParameter('tomador_razao_social', 0) as string;
			if (tipoTomador === 'PF') {
				body.tomador.dados_gerais = {
					razao_social: razaoSocial,
				};
				const email = this.getNodeParameter('tomador_email', 0, '') as string;
				const ddd = this.getNodeParameter('tomador_ddd', 0, '') as number;
				const telefone = this.getNodeParameter('tomador_telefone', 0, '') as string;
				if (email) body.tomador.dados_gerais.email = email;
				if (ddd) body.tomador.dados_gerais.ddd = ddd;
				if (telefone) body.tomador.dados_gerais.telefone = telefone;
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
				body.tomador.razao_social = razaoSocial;
			}
		}
	}
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
