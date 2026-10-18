import type { Locale } from '@/i18n/locales';

type AuthLinkCopy = {
  metaTitle: string;
  opening: string;
  openButton: string;
  notInstalledConfirm: string;
  notInstalledRecovery: string;
  storeButton: string;
  confirmTitle: string;
  confirmBody: string;
  confirmDesktop: string;
  recoveryTitle: string;
  recoveryBody: string;
  recoveryDesktop: string;
  errorTitle: string;
  errorBody: string;
  emptyTitle: string;
  emptyBody: string;
};

export const authLinkCopy: Record<Locale, AuthLinkCopy> = {
  en: {
    metaTitle: 'Open RouteWise',
    opening: 'Opening RouteWise…',
    openButton: 'Open in RouteWise',
    notInstalledConfirm: 'Nothing happened? Install RouteWise and sign in there: your email is already confirmed.',
    notInstalledRecovery: 'Nothing happened? Install RouteWise, then ask for a new link in the app (this one only works once).',
    storeButton: 'Get it on the App Store',
    confirmTitle: 'Your email is confirmed',
    confirmBody: 'Open RouteWise to finish signing in.',
    confirmDesktop: 'Your account is ready. Sign in with your email and password in the RouteWise app on your phone.',
    recoveryTitle: 'Choose a new password',
    recoveryBody: 'Open RouteWise to set your new password.',
    recoveryDesktop: 'The new password is set in the app. On your phone, ask for a new link in RouteWise and open that email there.',
    errorTitle: 'This link no longer works',
    errorBody: 'It expired or was already used. Ask for a new one in the RouteWise app.',
    emptyTitle: 'Nothing to open here',
    emptyBody: 'Use the link in the email RouteWise sent you.',
  },
  pt: {
    metaTitle: 'Abrir o RouteWise',
    opening: 'Abrindo o RouteWise…',
    openButton: 'Abrir no RouteWise',
    notInstalledConfirm: 'Não abriu? Instale o RouteWise e entre por lá: seu e-mail já está confirmado.',
    notInstalledRecovery: 'Não abriu? Instale o RouteWise e peça um novo link pelo app (este só funciona uma vez).',
    storeButton: 'Baixar na App Store',
    confirmTitle: 'Seu e-mail foi confirmado',
    confirmBody: 'Abra o RouteWise para terminar de entrar.',
    confirmDesktop: 'Sua conta está pronta. Entre com seu e-mail e senha no app RouteWise do celular.',
    recoveryTitle: 'Escolha uma nova senha',
    recoveryBody: 'Abra o RouteWise para definir a nova senha.',
    recoveryDesktop: 'A nova senha é definida no app. No celular, peça um novo link pelo RouteWise e abra esse e-mail por lá.',
    errorTitle: 'Este link não funciona mais',
    errorBody: 'Ele expirou ou já foi usado. Peça um novo no app RouteWise.',
    emptyTitle: 'Nada para abrir aqui',
    emptyBody: 'Use o link do e-mail que o RouteWise enviou.',
  },
  fr: {
    metaTitle: 'Ouvrir RouteWise',
    opening: 'Ouverture de RouteWise…',
    openButton: 'Ouvrir dans RouteWise',
    notInstalledConfirm: 'Rien ne se passe? Installez RouteWise et connectez-vous : votre courriel est déjà confirmé.',
    notInstalledRecovery: 'Rien ne se passe? Installez RouteWise, puis demandez un nouveau lien dans l’application (celui-ci ne fonctionne qu’une fois).',
    storeButton: "Télécharger dans l’App Store",
    confirmTitle: 'Votre courriel est confirmé',
    confirmBody: 'Ouvrez RouteWise pour terminer la connexion.',
    confirmDesktop: 'Votre compte est prêt. Connectez-vous avec votre courriel et votre mot de passe dans l’application RouteWise sur votre téléphone.',
    recoveryTitle: 'Choisissez un nouveau mot de passe',
    recoveryBody: 'Ouvrez RouteWise pour définir votre nouveau mot de passe.',
    recoveryDesktop: 'Le nouveau mot de passe se définit dans l’application. Sur votre téléphone, demandez un nouveau lien dans RouteWise et ouvrez ce courriel sur place.',
    errorTitle: 'Ce lien ne fonctionne plus',
    errorBody: 'Il a expiré ou a déjà été utilisé. Demandez-en un nouveau dans l’application RouteWise.',
    emptyTitle: 'Rien à ouvrir ici',
    emptyBody: 'Utilisez le lien du courriel que RouteWise vous a envoyé.',
  },
  es: {
    metaTitle: 'Abrir RouteWise',
    opening: 'Abriendo RouteWise…',
    openButton: 'Abrir en RouteWise',
    notInstalledConfirm: '¿No pasó nada? Instala RouteWise e inicia sesión ahí: tu correo ya está confirmado.',
    notInstalledRecovery: '¿No pasó nada? Instala RouteWise y pide un enlace nuevo desde la app (este solo funciona una vez).',
    storeButton: 'Descargar en la App Store',
    confirmTitle: 'Tu correo está confirmado',
    confirmBody: 'Abre RouteWise para terminar de iniciar sesión.',
    confirmDesktop: 'Tu cuenta está lista. Inicia sesión con tu correo y contraseña en la app RouteWise de tu teléfono.',
    recoveryTitle: 'Elige una contraseña nueva',
    recoveryBody: 'Abre RouteWise para definir tu contraseña nueva.',
    recoveryDesktop: 'La contraseña nueva se define en la app. En tu teléfono, pide un enlace nuevo en RouteWise y abre ese correo ahí.',
    errorTitle: 'Este enlace ya no funciona',
    errorBody: 'Venció o ya se usó. Pide uno nuevo en la app RouteWise.',
    emptyTitle: 'No hay nada que abrir aquí',
    emptyBody: 'Usa el enlace del correo que te envió RouteWise.',
  },
};
