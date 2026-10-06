/* ============================================================
   CONFIGURAÇÃO DO FIREBASE — projeto calculadora-dnit
   Já preenchido com os dados do seu projeto. Não precisa editar nada.

   Se um dia precisar conferir estes valores:
   console.firebase.google.com › calculadora-dnit › engrenagem
   (Configurações do projeto) › Seus aplicativos › calculadora.
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDZyUlkiGAOhe4NP7PX_jaaJzcS98tldDo",
  authDomain:        "calculadora-dnit.firebaseapp.com",
  projectId:         "calculadora-dnit",
  storageBucket:     "calculadora-dnit.firebasestorage.app",
  messagingSenderId: "1003742612156",
  appId:             "1:1003742612156:web:7e27813b90a16bea715eb9",
  measurementId:     "G-BBR52B31WC"
};

/* ============================================================
   ADMINISTRADORES
   Usuários com poderes de administrador: liberar e bloquear
   acesso, definir validade da licença e ver todos os projetos.

   Esta lista precisa ser IDÊNTICA à da função admin() dentro do
   arquivo firestore.rules. Se incluir alguém aqui, inclua lá
   também e publique as regras de novo — senão não funciona.
   ============================================================ */
window.ADMINS = [
  "wfajardoeng@gmail.com",
  "igororcobras@gmail.com"
];
