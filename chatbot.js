const knowledgeBase = [
  {
    question: "Como cadastrar uma nova classe contábil?",
    answer:
      "Acesse: Cadastros > Auxiliares > Classe contábil.\n- Insira um código sequencial (não pode ser repetido).\n- Informe o nome da classe.\n- Informe o tipo (ativo, passivo ou resultado).",
  },
  {
    question: "Como cadastrar feriados no sistema?",
    answer:
      "Acesse: Operações > Auxiliares > Feriados.\n- Clique em Consultar para verificar os existentes.\n- Indique dia/mês/ano, marque esfera (Federal, Estadual ou Municipal), indique se é Permanente e clique em Confirmar.",
  },
  {
    question: "Como resetar a senha?",
    answer:
      "Acesse o módulo de administração, vá em Configurações > Usuários > Consulte o usuário desejado.\n- Em seguida, clique no lápis para acessar a tela de cadastro do usuário.\n- Insira a senha 'Padrao998', ela irá gerar uma contra senha que será encaminhada ao usuário.",
  },
  {
    question: "O que é checklist de partida?",
    answer:
      "Serve para associar responsáveis a novas contas. Sempre tem o mês zero (0) e não é usado para conciliação.",
  },
  {
    question: "Como fazer carga em massa do plano de contas?",
    answer:
      "Acesse: Controle > Importar > Dados via CSV/TXT.\n- Clique em 'Escolher arquivo' e depois em 'Importar arquivo'.",
  },
  {
    question: "Quais formatos de arquivo são aceitos para carga de anexos?",
    answer: "PDF, ZIP e RAR.",
  },
  {
    question: "Como aprovar uma capa com ressalva?",
    answer:
      "Somente o aprovador contábil pode aprovar com ressalva. É necessário inserir uma justificativa e um motivo de ressalva.",
  },
  {
    question: "O que é saldo extracontábil?",
    answer:
      "São registros financeiros que não afetam a contabilidade oficial, usados para controle gerencial.",
  },
  {
    question: "Como validar um balancete?",
    answer:
      "Acesse: Controles > Base de dados > Validação Balancete. Selecione os saldos e clique em Validar e depois Inserir Dados.",
  },
];

// Fallback search when Fuse.js is unavailable
function localSearch(query) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return null;
  let best = null;
  let bestScore = 0;
  for (const item of knowledgeBase) {
    const hay = item.question.toLowerCase();
    const words = q.split(/\s+/);
    let score = 0;
    for (const w of words) if (w && hay.includes(w)) score++;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return bestScore > 0 ? best : null;
}

document.addEventListener("DOMContentLoaded", () => {
  const helpFab = document.getElementById("helpFab");
  const chatPopup = document.getElementById("chat-popup");
  const chatBody = document.getElementById("chat-body");
  const userInput = document.getElementById("user-input");
  const closeChatBtn = document.getElementById("close-chat");

  if (helpFab && chatPopup) {
    helpFab.addEventListener("click", () => {
      chatPopup.classList.add("show");
    });
  }

  function toggleChat() {
    if (chatPopup) chatPopup.classList.remove("show");
  }

  if (closeChatBtn) closeChatBtn.addEventListener("click", toggleChat);

  window.addEventListener("mousedown", (e) => {
    if (
      chatPopup &&
      chatPopup.classList.contains("show") &&
      !chatPopup.contains(e.target) &&
      e.target !== helpFab
    ) {
      toggleChat();
    }
  });

  function appendMessage(content, sender) {
    if (!chatBody) return;
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.textContent = content;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  async function sendMessage() {
    const text = (userInput?.value || "").trim();
    if (!text) return;

    appendMessage(text, "user");
    if (userInput) userInput.value = "";

    const apiKey = "YOUR_GROQ_API_KEY";
    const useRemote = !!apiKey && typeof fetch === "function";

    try {
      if (useRemote) {
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "mixtral-8x7b-32768",
              messages: [
                {
                  role: "system",
                  content:
                    "Você é um assistente virtual da empresa PZM. Seja claro, direto e educado. Responda com base no manual.",
                },
                { role: "user", content: text },
              ],
            }),
          }
        );
        const data = await response.json();
        const botReply = data?.choices?.[0]?.message?.content;
        if (botReply) {
          appendMessage(botReply, "bot");
          return;
        }
      }

      const hit =
        (window.Fuse &&
          new window.Fuse(knowledgeBase, {
            keys: ["question"],
            threshold: 0.4,
          }).search(text)?.[0]?.item) ||
        localSearch(text);
      if (hit) {
        appendMessage(hit.answer, "bot");
      } else {
        appendMessage(
          "Desculpe, não encontrei nada relacionado a isso no manual.",
          "bot"
        );
      }
    } catch (err) {
      console.error(err);
      const hit =
        (window.Fuse &&
          new window.Fuse(knowledgeBase, {
            keys: ["question"],
            threshold: 0.4,
          }).search(text)?.[0]?.item) ||
        localSearch(text);
      if (hit) {
        appendMessage(hit.answer, "bot");
      } else {
        appendMessage(
          "Erro ao se comunicar com a IA e não encontrei nada no manual.",
          "bot"
        );
      }
    }
  }

  if (userInput) {
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  const sendBtn = document.getElementById("send-btn");
  if (sendBtn) sendBtn.addEventListener("click", sendMessage);

  window.sendMessage = sendMessage;
  window.toggleChat = toggleChat;
});
