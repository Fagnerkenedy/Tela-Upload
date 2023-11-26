const depara = {
  SALESORDERID: {
    api: "id",
    type: "id",
  },
  Assunto: {
    api: "Subject",
    type: "text",
  },
  "Escola Nome": {
    api: "Account_Name",
    type: "lookup",
    module: "Accounts",
    lookup_field: "CNPJ",
  },
  Status: {
    api: "Status",
    type: "select",
  },
  Carrier: {
    api: "Carrier",
    type: "select",
  },
  "Billing Country": {
    api: "Billing_Country",
    type: "text",
  },
  "Deal Name": {
    api: "Deal_Name",
    type: "lookup",
    module: "Deals",
    lookup_field: "Deal_Name",
  },
  "Contact First Name": {
    api: "Contact_Name",
    type: "lookup",
    module: "Contacts",
    lookup_field: "First_Name",
  },
  "Data de vencimento": {
    api: "Due_Date",
    type: "date",
  },
  "CNPJ contratante": {
    api: "CNPJ_contratante",
    type: "text",
  },
  // "Unidade de Negócio": {
  //   api: "Unidade_de_Neg_cio",
  //   type: "select",
  // },
  // "Sistema de Ensino (Selo)": {
  //   api: "Sistema_de_Ensino",
  //   type: "select",
  // },
  // "N.º do cliente.": {
  //   api: "Customer_No",
  //   type: "text",
  // },
  // Ciclo: {
  //   api: "Ciclo",
  //   type: "select",
  // },
  /*"Número Portal": {
    api: "N_mero_Portal",
    type: "number",
  },
  "Representante Legal (Primeiro)": {
    api: "Representante_Legal",
    type: "text"
  },
  "Representante Legal (Segundo)": {
    api: "Representante_Legal_Segundo",
    type: "text",
  },
  Grupo: {
    api: "Grupo",
    type: "text",
  },
  "Número de professores": {
    api: "N_mero_de_professores",
    type: "number",
  },
  "Tipo de faturamento": {
    api: "Tipo_de_faturamento",
    type: "select",
  },
  "Índice de Reajuste": {
    api: "ndice_de_Reajuste",
    type: "select",
  },
  Comissionado: {
    api: "Comissionado",
    type: "lookup",
    module: "users",
    lookup_field: "full_name",
  },
  "Consultor da Escola": {
    api: "Consultor_de_Relacionamento",
    type: "lookup",
    module: "users",
    lookup_field: "full_name",
  },
  "Proprietário da Contrato": {
    api: "Owner",
    type: "lookup",
    module: "users",
    lookup_field: "full_name",
  },
  "Gerente da Escola": {
    api: "Gerente_de_Relacionamento",
    type: "lookup",
    module: "users",
    lookup_field: "full_name",
  },
  "E-mail Tabela de Preço": {
    api: "E_mail_Tabela_de_Pre_o",
    type: "text",
  },
  Segmentos: {
    api: "Segmentos",
    type: "multiselect",
  },
  "Nº Contrato OLEM": {
    api: "N_Contrato_OLEM",
    type: "text",
  },
  "Proposta Liquida do Comercial": {
    api: "Proposta_Liquida_do_Comercial",
    type: "currency",
  },
  "Consultor Comercial": {
    api: "Consultor_Comercial",
    type: "lookup",
    module: "Colaborador",
    lookup_field: "Name",
  },
  Documento: {
    api: "Documento",
    type: "select",
  },
  "Data Devolução Documento": {
    api: "Data_Devolu_o_Documento",
    type: "date",
  },
  "Tipo Contrato": {
    api: "Tipo_de_Contrato",
    type: "select",
  },
  "Formato Documento": {
    api: "Formato_Documento",
    type: "select",
  },
  "Pendência Documento": {
    api: "Pend_ncia_Documento",
    type: "select",
  },
  "Data Liberação Boas Vindas": {
    api: "Data_Libera_o_Boas_Vindas",
    type: "date",
  },
  "Data Passagem de Bastão": {
    api: "Data_Passagem_de_Bast_o",
    type: "date",
  },
  "Liberado para Boas-vindas?": {
    api: "Liberado_para_Boas_vindas",
    type: "select",
  },
  "Tipo Minuta": {
    api: "Tipo_Minuta",
    type: "select",
  },
  "Data Liberação Cadastro": {
    api: "Data_Libera_o_Cadastro",
    type: "date",
  },
  "Ano Inicial": {
    api: "Inicio",
    type: "date",
  },
  Vencimento: {
    api: "Due_Date",
    type: "date",
  },
  "Tempo de Contrato": {
    api: "Tempo_de_contrato",
    type: "decimal",
  },
  "Tempo de contrato (Número Inteiro)": {
    api: "Tempo_de_contrato_old",
    type: "number",
  },
  "Data Renovação Automática": {
    api: "Limite_cancelamento",
    type: "date",
  },
  "Data Carta Cancelamento": {
    api: "Data_carta_Cancelamento",
    type: "date",
  },
  "Status Carta Cancelamento": {
    api: "Status_Carta_Cancelamento",
    type: "select",
  },
  "Status NIJ": {
    api: "Status_NIJ",
    type: "select",
  },
  "Operador Mercantil": {
    api: "Operador_Mercantil",
    type: "lookup",
    module: "Operadores_Mercantis",
    lookup_field: "Name",
  },
  "Tipo de cessão": {
    api: "Tipo_de_cess_o",
    type: "select",
  },
  "Data emissão da cessão": {
    api: "Data_emiss_o_da_cess_o",
    type: "date",
  },
  "Data retorno da cessão": {
    api: "Data_retorno_da_cess_o",
    type: "date",
  },
  "Termo de locação": {
    api: "Termo_de_loca_o",
    type: "select",
  },
  "Tempo de locação": {
    api: "Tempo_de_loca_o",
    type: "number",
  },
  "Produtos da locação": {
    api: "Produtos_da_loca_o",
    type: "select",
  },
  "País de Cobrança": {
    api: "Billing_Country",
    type: "text",
  },
  "Estado de Cobrança": {
    api: "Billing_State",
    type: "text",
  },
  "Cidade de Cobrança": {
    api: "Billing_City",
    type: "text",
  },
  "Bairro de Cobrança": {
    api: "Bairro_de_Cobran_a",
    type: "text",
  },
  "CEP de Cobrança": {
    api: "Billing_Code",
    type: "text",
  },
  "Rua de Cobrança": {
    api: "Billing_Street",
    type: "text",
  },
  "Número de Cobrança": {
    api: "N_mero_de_Cobran_a",
    type: "text",
  },
  "Complemento de Cobrança": {
    api: "Complemento_de_Cobran_a",
    type: "text",
  },
  "País de Entrega": {
    api: "Shipping_Country",
    type: "text",
  },
  "Estado de Entrega": {
    api: "Shipping_State",
    type: "text",
  },
  "Cidade de Entrega": {
    api: "Shipping_City",
    type: "text",
  },
  "Bairro de Entrega": {
    api: "Bairro_de_Entrega",
    type: "text",
  },
  "CEP de Entrega": {
    api: "Shipping_Code",
    type: "text",
  },
  "Rua de entrega": {
    api: "Shipping_Street",
    type: "text",
  },
  "Número de Entrega": {
    api: "N_mero_de_Entrega",
    type: "text",
  },
  "Complemento de Entrega": {
    api: "Complemento_de_Entrega",
    type: "text",
  },
  "Condições de Pagamento": {
    api: "Condi_es_de_Pagamento",
    type: "select",
  },
  "Formato de Entrega do Material": {
    api: "Entrega",
    type: "select",
  },
  Frete: {
    api: "Frete",
    type: "select",
  },
  "Percentual de Devolução": {
    api: "Percentual_de_Devolu_o",
    type: "percent",
  },
  "Tipo Atendimento Contrato": {
    api: "Atendimento",
    type: "select",
  },
  "Termos e condições": {
    api: "Terms_and_Conditions",
    type: "text",
  },
  "Percentual de Multa": {
    api: "Percentual_de_Multa",
    type: "percent",
  },
  "Desconto Progressivo/Regressivo": {
    api: "Desconto_Progressivo_Regressivo",
    type: "text",
  },
  "Cláusulas Especiais Aprovadas": {
    api: "Cl_usulas_Especiais_Aprovadas",
    type: "text",
  },
  "Tabela de Preço Portal": {
    api: "Tabela_de_Pre_os_EDUC_2019",
    type: "text",
  },
  "Formato EM": {
    api: "Formato_EM",
    type: "select",
  },
  Estrutura: {
    api: "Estrutura",
    type: "text",
  },
  "Serviços Avulsos": {
    api: "Servi_os",
    type: "text",
  },
  "Valor dos Serviços Avulsos": {
    api: "Valor_dos_Servi_os_Avulsos",
    type: "currency",
  },
  "Material Bonificado (Descrição)": {
    api: "Material_Bonificado_Descri_o",
    type: "text",
  },
  "Incentivo Comercial": {
    api: "Incentivo_Comercial",
    type: "text",
  },
  "Material Aluno (Quantidade)": {
    api: "Material_Aluno_Quantidade",
    type: "number",
  },
  "Material Bonificado (Quantidade)": {
    api: "Material_Bonificado",
    type: "text",
  },
  "Adota Chromebook": {
    api: "Adota_Chromebook",
    type: "select",
  },
  "Total Exemplares": {
    api: "Total_Exemplares",
    type: "number",
  },
  "Pacotes EMME": {
    api: "Pacotes_EMME",
    type: "select",
  },
  Descrição: {
    api: "Description",
    type: "text",
  },
  "Pendências OLEM": {
    api: "Pend_ncias_OLEM",
    type: "text",
  },
  "Número Demanda": {
    api: "N_mero_Demanda_New",
    type: "text",
  },
  "Status Demanda": {
    api: "Status_Demanda",
    type: "select",
  },
  "Desconto Médio": {
    api: "Desconto_M_dio",
    type: "percent",
  },
  "Margem de Contribuição (VPL)": {
    api: "Margem_VPL",
    type: "currency",
  },
  "Total Geral(carga)": {
    api: "Total_Geral_carga",
    type: "decimal",
  },
  "Margem (VPL)": {
    api: "Margem_VPL_2",
    type: "percent",
  },
  "Receita Liquida Após Devolução (VPL)": {
    api: "Receita_Liquida_Ap_s_Devolu_o_VPL",
    type: "currency",
  },
  "Share Proposto": {
    api: "Share_Proposto",
    type: "number",
  },
  "Originou Oportunidade": {
    api: "Originou_Oportunidade",
    type: "boolean",
  },
  "Originou Boas-vindas": {
    api: "Originou_Boas_vindas",
    type: "boolean",
  },
  "Contrato Cancelado/Declinado": {
    api: "Contrato_Perdido",
    type: "boolean",
  },
  "Tipo Material": {
    api: "Tipo_Material",
    type: "text",
  },
  "Id Importação": {
    api: "Id_Importa_o2",
    type: "text",
  },
  "Processado consultor": {
    api: "Processado_consultor",
    type: "select",
  },
  Moeda: {
    api: "Currency",
    type: "text",
  },
  Chave: {
    api: "Chave",
    type: "text",
  },
  "Proprietário Carga": {
    api: "Propriet_rio_Carga",
    type: "text",
  },
  "Representante Legal Carga": {
    api: "Representante_Legal_Carga",
    type: "text",
  },
  "Proprietário contrato email": {
    api: "Propriet_rio_contrato_email",
    type: "text",
  },
  "Status carga": {
    api: "Status_carga",
    type: "select",
  },
  "Taxa de câmbio": {
    api: "Exchange_Rate",
    type: "number",
  },
  Ajuste: {
    api: "Adjustment",
    type: "decimal",
  },
  Desconto: {
    api: "Discount",
    type: "currency",
  },
  Imposto: {
    api: "Tax",
    type: "currency",
  },
  "Sub-total": {
    api: "Sub_Total",
    type: "currency",
  },
  "Total Geral": {
    api: "Grand_Total",
    type: "currency",
  },
  "TAG": {
    api: "Tag",
    type: "tag"
  }*/
};

module.exports = { depara };
