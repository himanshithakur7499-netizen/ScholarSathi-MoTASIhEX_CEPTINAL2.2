import { useState } from "react";

const answers = {
  en: {
    welcome:
      "Hello! I am JAGO, your Scholarship Assistant. Ask me about eligibility, documents, application status, verification, or payment.",

    pending:
      "Your Post-Matric Scholarship application is currently pending because one income verification check needs attention. You can open Verification to see the mismatch and submit the required correction.",

    status:
      "Your current application status is: Verification in Progress. ST status and academic records are verified. Income verification requires attention.",

    documents:
      "For your scholarship application, commonly required documents include ST Certificate, Income Certificate, Academic Record, Institution/Enrollment details and bank details. Your verified documents can be reused through your Scholarship Passport.",

    eligibility:
      "Based on the demo student profile, you may be eligible for Post-Matric Scholarship. Eligibility is finally determined using the scheme rules and verified records.",

    payment:
      "Your DBT payment is currently not released because verification is still in progress. Once the required verification is completed and the application is sanctioned, the payment status will be updated.",

    schemes:
      "ScholarSathi brings five MoTA scholarship schemes into one place: Pre-Matric, Post-Matric, Top Class, National Fellowship for ST (NFST), and National Overseas Scholarship (NOS).",

    next:
      "Your next step is to open Verification, check the income verification issue, and submit the corrected information/document if required.",

    passport:
      "Your Scholarship Passport stores your reusable student profile and verified records so that you do not need to repeatedly enter the same information for different scholarship applications.",

    help:
      "You can ask me things like: 'Why is my application pending?', 'What documents do I need?', 'Am I eligible?', 'What is my payment status?', or 'What is my next step?'",
  },

  hi: {
    welcome:
      "नमस्ते! मैं JAGO, आपका Scholarship Assistant हूँ। आप eligibility, documents, application status, verification या payment के बारे में पूछ सकते हैं।",

    pending:
      "आपकी Post-Matric Scholarship application अभी pending है क्योंकि income verification में एक issue है। Verification section खोलकर आप mismatch देख सकते हैं और required correction submit कर सकते हैं।",

    status:
      "आपकी current application status है: Verification in Progress. ST status और academic records verify हो चुके हैं। Income verification में attention required है।",

    documents:
      "Scholarship के लिए आमतौर पर ST Certificate, Income Certificate, Academic Record, Institution/Enrollment details और bank details की जरूरत होती है। Verified documents को Scholarship Passport के माध्यम से दोबारा इस्तेमाल किया जा सकता है।",

    eligibility:
      "Demo student profile के आधार पर आप Post-Matric Scholarship के लिए eligible हो सकते हैं। Final eligibility scheme rules और verified records के आधार पर तय होगी।",

    payment:
      "आपका DBT payment अभी release नहीं हुआ है क्योंकि verification process चल रही है। Verification complete और application sanction होने के बाद payment status update होगा।",

    schemes:
      "ScholarSathi में पाँच MoTA scholarship schemes एक जगह मिलती हैं: Pre-Matric, Post-Matric, Top Class, National Fellowship for ST (NFST) और National Overseas Scholarship (NOS)।",

    next:
      "आपका अगला step Verification section खोलना है। वहाँ income verification issue देखें और जरूरत होने पर corrected information/document submit करें।",

    passport:
      "Scholarship Passport आपके reusable student profile और verified records को सुरक्षित रखता है, जिससे अलग-अलग scholarship applications में वही जानकारी बार-बार भरने की जरूरत कम होती है।",

    help:
      "आप मुझसे पूछ सकते हैं: 'मेरी scholarship pending क्यों है?', 'कौन से documents चाहिए?', 'क्या मैं eligible हूँ?', 'Payment status क्या है?' या 'अगला step क्या है?'",
  },
};

function getReply(message, language) {
  const text = message.toLowerCase().trim();

  if (!text) {
    return language === "hi"
      ? "कृपया अपना सवाल लिखें।"
      : "Please type your question.";
  }

  if (
    text.includes("pending") ||
    text.includes("why") ||
    text.includes("पेंडिंग") ||
    text.includes("क्यों")
  ) {
    return answers[language].pending;
  }

  if (
    text.includes("status") ||
    text.includes("application") ||
    text.includes("स्टेटस") ||
    text.includes("आवेदन")
  ) {
    return answers[language].status;
  }

  if (
    text.includes("document") ||
    text.includes("documents") ||
    text.includes("दस्तावेज")
  ) {
    return answers[language].documents;
  }

  if (
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("योग्य")
  ) {
    return answers[language].eligibility;
  }

  if (
    text.includes("payment") ||
    text.includes("dbt") ||
    text.includes("पैसे") ||
    text.includes("पेमेंट")
  ) {
    return answers[language].payment;
  }

  if (
    text.includes("scheme") ||
    text.includes("scholarship") ||
    text.includes("scholarships") ||
    text.includes("स्कॉलरशिप")
  ) {
    return answers[language].schemes;
  }

  if (
    text.includes("next") ||
    text.includes("step") ||
    text.includes("अगला") ||
    text.includes("स्टेप")
  ) {
    return answers[language].next;
  }

  if (
    text.includes("passport") ||
    text.includes("पासपोर्ट")
  ) {
    return answers[language].passport;
  }

  return answers[language].help;
}

export default function JagoChat() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "jago",
      text: answers.en.welcome,
    },
  ]);

  function changeLanguage(lang) {
    setLanguage(lang);

    setMessages([
      {
        sender: "jago",
        text: answers[lang].welcome,
      },
    ]);
  }

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const reply = getReply(userMessage, language);

    setMessages((oldMessages) => [
      ...oldMessages,
      {
        sender: "user",
        text: userMessage,
      },
      {
        sender: "jago",
        text: reply,
      },
    ]);

    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <>
      {/* =========================
          FLOATING JAGO BUTTON
      ========================= */}

      {!open && (
        <button
          className="jago-floating"
          onClick={() => setOpen(true)}
          aria-label="Open JAGO AI Assistant"
        >
          <span className="jago-icon">✦</span>

          <span className="jago-text">
            <strong>JAGO</strong>
            <small>AI Assistant</small>
          </span>
        </button>
      )}

      {/* =========================
          JAGO CHAT WINDOW
      ========================= */}

      {open && (
        <div className="jago-window">

          {/* Header */}

          <div className="jago-header">
            <div>
              <strong>✦ JAGO</strong>
              <span>Scholarship Assistant</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close JAGO"
            >
              ×
            </button>
          </div>

          {/* Language Selector */}

          <div className="jago-language">
            <button
              className={language === "en" ? "selected" : ""}
              onClick={() => changeLanguage("en")}
            >
              English
            </button>

            <button
              className={language === "hi" ? "selected" : ""}
              onClick={() => changeLanguage("hi")}
            >
              हिंदी
            </button>
          </div>

          {/* Messages */}

          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "user" ? "user" : ""
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input */}

          <div className="jago-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                language === "hi"
                  ? "अपना सवाल लिखें..."
                  : "Ask JAGO something..."
              }
              aria-label="Ask JAGO"
            />

            <button
              onClick={sendMessage}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>

        </div>
      )}
    </>
  );
}