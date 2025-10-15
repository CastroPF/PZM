(function () {
  const layoutDefaults = {
    impostos: {
      title: "PZMWEB Enterprise :: Controle de Impostos",
      home: "/consultas/operativo.html",
    },
    obrigacoes: {
      title: "PZMWEB Enterprise :: Controle de Obrigações Acessórias",
      home: "/obrigacoes/obr-operativo.html",
    },
    lancamentos: {
      title: "PZMWEB Enterprise :: Automação Lançamentos Manuais",
      home: "/lancamentos/operativo.html",
    },
  };

  const navRight = `
    <div class="nav-right">
      <div class="toggle-switch">
        <label class="switch-label">
          <input type="checkbox" class="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="flags">
        <img src="https://flagcdn.com/16x12/br.png" alt="Português" title="Português" />
        <img src="https://flagcdn.com/16x12/es.png" alt="Español" title="Español" />
        <img src="https://flagcdn.com/16x12/gb.png" alt="English" title="English" />
      </div>
    </div>
  `;

  const navTemplates = {
    impostos: `
      <div class="nav-left">
        <div class="menu-item">
          Controles
          <div class="submenu">
            <a href="/modulos/index.html">Alterar Aplicativo</a>
            <a href="/modulos/divisão.html">Alterar Divisão</a>
          </div>
        </div>

        <div class="menu-item">
          Cadastros
          <div class="submenu">
            <div class="menu-item">
              <a href="#">Auxiliares</a>
              <div class="submenu-right">
                <a href="/cadastros/auxiliares/imposto-padrao.html">Imposto Padrão</a>
                <a href="/cadastros/auxiliares/imposto-especifico.html">Imposto Específico</a>
                <a href="/cadastros/auxiliares/cadastro-estabelecimento.html">Categoria Estabelecimento</a>
                <a href="/cadastros/auxiliares/local-pagamento.html">Local de Pagto/Arquivo</a>
                <a href="/cadastros/auxiliares/forma-quitacao.html">Forma de Quitação</a>
                <a href="/cadastros/auxiliares/grupo-estagio-controle.html">Grupo de Estágio de Controle</a>
                <a href="/cadastros/auxiliares/estagio-controle.html">Estágio de Controle</a>
                <a href="/cadastros/auxiliares/motivo-reprovacao.html">Motivo de Reprovação</a>
                <a href="/cadastros/auxiliares/area.html">Área</a>
                <a href="/cadastros/auxiliares/tipo-anexo.html">Tipos de Anexo</a>
              </div>
            </div>

            <div class="menu-item">
              <a href="#">Agrupamentos</a>
              <div class="submenu-right">
                <a href="/cadastros/agrupamentos/estabelecimento-imposto.html">Estabelecimento x Imposto Específico</a>
                <a href="/cadastros/agrupamentos/imposto-obrigacao.html">Imposto x Obrigação Padrão</a>
                <a href="/cadastros/agrupamentos/estagio-imposto-padrao.html">Estágio x Imposto Padrão</a>
                <a href="/cadastros/agrupamentos/supervisor-operativo.html">Supervisor/Coordenador x Operativo</a>
                <a href="/cadastros/agrupamentos/grupo-vencimento-imposto.html">Grupo de Vencimento x Imposto Específico</a>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-item">
          Operações
          <div class="submenu">
            <div class="menu-item">
              <a href="#">Auxiliares</a>
              <div class="submenu-right">
                <a href="/cadastros/justificativa-area.html">Justificativa de Atraso - Área e Responsável</a>
              </div>
            </div>
            <a href="/cadastros/ano-controle.html">Ano de Controle</a>
            <a href="/cadastros/mes-controle.html">Mês de Controle</a>
            <a href="/consultas/operativo.html">Checklist de Apurações de Impostos Operativo</a>
            <a href="/consultas/supervisor.html">Checklist de Apurações de Impostos Supervisor</a>
            <a href="/capaprocesso/capa-de-processo.html">Controle de Aprovação da Capa de Processo</a>
          </div>
        </div>

        <div class="menu-item">
          Processos
          <div class="submenu">
            <a href="/ProcessosImpostos/calendario/calendario.html">Gerar Calendário de Vencimento de Impostos</a>
            <a href="/ProcessosImpostos/revisão/revisao.html">Gerar Checklist de Revisão</a>
            <a href="/ProcessosImpostos/GerarChecklist/checklist.html">Gerar Checklist de Apuração de Impostos</a>
            <a href="/ProcessosImpostos/ExclusaoChecklist/exclusao.html">Excluir Checklist de Apuração de Impostos</a>
            <a href="/ProcessosImpostos/ExclusaoRevisao/index.html">Excluir Checklist de Revisão</a>
          </div>
        </div>

        <span>Relatórios</span>
        <span>Gráficos</span>
        <span>Configurações</span>
        <span>Ajuda</span>
        <span><a class="sair" href="/login/login.html">Sair</a></span>
      </div>
    `,
    obrigacoes: `
      <div class="nav-left">
        <div class="menu-item">
          Controles
          <div class="submenu">
            <a href="/modulos/index.html">Alterar Aplicativo</a>
            <a href="/modulos/divisão.html">Alterar Divisão</a>
          </div>
        </div>

        <div class="menu-item">
          Cadastros
          <div class="submenu">
            <div class="menu-item">
              <a href="#">Auxiliares</a>
              <div class="submenu-right">
                <a href="/cadastros/auxiliares/imposto-padrao.html">Imposto Padrão</a>
                <a href="/cadastros/auxiliares/imposto-especifico.html">Imposto Específico</a>
                <a href="/cadastros/auxiliares/cadastro-estabelecimento.html">Categoria Estabelecimento</a>
                <a href="/cadastros/auxiliares/local-pagamento.html">Local de Pagto/Arquivo</a>
                <a href="/cadastros/auxiliares/forma-quitacao.html">Forma de Quitação</a>
                <a href="/cadastros/auxiliares/grupo-estagio-controle.html">Grupo de Estágio de Controle</a>
                <a href="/cadastros/auxiliares/estagio-controle.html">Estágio de Controle</a>
                <a href="/cadastros/auxiliares/motivo-reprovacao.html">Motivo de Reprovação</a>
                <a href="/cadastros/auxiliares/area.html">Área</a>
                <a href="/cadastros/auxiliares/tipo-anexo.html">Tipos de Anexo</a>
              </div>
            </div>

            <div class="menu-item">
              <a href="#">Agrupamentos</a>
              <div class="submenu-right">
                <a href="/cadastros/agrupamentos/estabelecimento-imposto.html">Estabelecimento x Imposto Específico</a>
                <a href="/cadastros/agrupamentos/imposto-obrigacao.html">Imposto x Obrigação Padrão</a>
                <a href="/cadastros/agrupamentos/estagio-imposto-padrao.html">Estágio x Imposto Padrão</a>
                <a href="/cadastros/agrupamentos/supervisor-operativo.html">Supervisor/Coordenador x Operativo</a>
                <a href="/cadastros/agrupamentos/grupo-vencimento-imposto.html">Grupo de Vencimento x Imposto Específico</a>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-item">
          Operações
          <div class="submenu">
            <div class="menu-item">
              <a href="#">Auxiliares</a>
              <div class="submenu-right">
                <a href="/cadastros/justificativa-area.html">Justificativa de Atraso - Área e Responsável</a>
              </div>
            </div>
            <a href="/cadastros/ano-controle.html">Ano de Controle</a>
            <a href="/cadastros/mes-controle.html">Mês de Controle</a>
            <a href="/obrigacoes/obr-operativo.html">Checklist de Apurações de Impostos Operativo</a>
            <a href="/obrigacoes/obr-supervisor.html">Checklist de Apurações de Impostos Supervisor</a>
            <a href="/obrigacoes/obr-processo.html">Controle de Aprovação da Capa de Processo</a>
          </div>
        </div>

        <div class="menu-item">
          Processos
          <div class="submenu">
            <a href="/ProcessosObrigacoes/calendario/calendario.html">Gerar Calendário de Vencimento de Obrigações Acessórias</a>
            <a href="/ProcessosObrigacoes/revisão/revisao.html">Gerar Checklist de Revisão</a>
            <a href="/ProcessosObrigacoes/GerarChecklist/checklist.html">Gerar Checklist de Obrigações Acessórias</a>
            <a href="/ProcessosObrigacoes/ExclusaoChecklist/exclusao.html">Excluir Checklist de Obrigações Acessórias</a>
            <a href="/ProcessosObrigacoes/ExclusaoRevisao/index.html">Excluir Checklist de Revisão</a>
          </div>
        </div>

        <span>Relatórios</span>
        <span>Gráficos</span>
        <span>Configurações</span>
        <span>Ajuda</span>
        <span><a class="sair" href="/login/login.html">Sair</a></span>
      </div>
    `,
    lancamentos: `
      <div class="nav-left">
        <div class="menu-item">
          Controles
          <div class="submenu">
            <a href="/modulos/index.html">Alterar Aplicativo</a>
            <a href="/modulos/divisão.html">Alterar Divisão</a>
          </div>
        </div>
        <a class="cadastro-lanc" href="/LancCadastro/cadastro-lanc.html">Cadastrar Lançamento</a>
        <div class="menu-item">
          Operações
          <div class="submenu">
            <a href="/lancamentos/operativo.html">Consulta de Checklist Lançamento Manual - Operativo</a>
            <a href="/lancamentos/supervisor.html">Consulta de Checklist Lançamento Manual - Supervisor</a>
            <a href="/lancamentos/erp.html">Consulta de Status de Lançamento Manual</a>
          </div>
        </div>
        <span>Relatórios</span>
        <span>Gráficos</span>
        <span>Configurações</span>
        <span>Ajuda</span>
        <span><a class="sair" href="/login/login.html">Sair</a></span>
      </div>
    `,
  };

  function buildHeader(title, home) {
    const safeTitle = title || "";
    const homeLink = home || "#";

    return `
      <header class="header-container" data-component="layout-header">
        <div class="header-left">
          <h2>
            <a href="${homeLink}" class="mainmenu">${safeTitle}</a>
          </h2>
        </div>
        <div class="header-right">
          <img src="/assets/images/grupopzm.png" alt="logo" class="logo" />
        </div>
      </header>
    `;
  }

  function buildNav(layoutKey) {
    const navLeft = navTemplates[layoutKey];
    if (!navLeft) {
      return "";
    }
    return `
      <nav class="nav-container" data-component="layout-nav">
        ${navLeft}
        ${navRight}
      </nav>
    `;
  }

  function injectLayout() {
    const { body } = document;
    if (!body) {
      return;
    }

    const layoutKey = body.dataset.layout;
    if (!layoutKey || !layoutDefaults[layoutKey]) {
      return;
    }

    const defaults = layoutDefaults[layoutKey];
    const title = body.dataset.title || defaults.title;
    const home = body.dataset.home || defaults.home;

    const headerExists = document.querySelector(
      '[data-component="layout-header"]'
    );
    const navExists = document.querySelector('[data-component="layout-nav"]');

    const fragments = [];
    if (!headerExists) {
      fragments.push(buildHeader(title, home));
    }
    if (!navExists) {
      fragments.push(buildNav(layoutKey));
    }

    if (fragments.length > 0) {
      body.insertAdjacentHTML("afterbegin", fragments.join("\n"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectLayout);
  } else {
    injectLayout();
  }
})();
