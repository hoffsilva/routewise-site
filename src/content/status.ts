import type { Locale } from '@/i18n/locales';
import type { ApiStatus, ComponentState } from '@/status';

type StatusCopy = {
  metaTitle: string;
  kicker: string;
  headline: Record<ApiStatus['overall'], string>;
  summary: Record<ApiStatus['overall'], string>;
  componentsTitle: string;
  components: Record<'api' | 'database' | 'cache', { name: string; description: string }>;
  state: Record<ComponentState, string>;
  checkedAt: string;
  responseTime: string;
  refreshNote: string;
  reload: string;
  contact: string;
};

// {time}, {ms} and {email} are filled in by the page
export const statusCopy: Record<Locale, StatusCopy> = {
  en: {
    metaTitle: 'RouteWise status',
    kicker: 'System status',
    headline: {
      operational: 'Everything is running',
      degraded: 'Running, with one minor issue',
      down: 'RouteWise is having trouble',
    },
    summary: {
      operational: 'You can sign in, search for addresses and plan routes as usual.',
      degraded: 'The app works, but our cache is down, so some screens may take longer to load.',
      down: 'Signing in, address search and route planning may fail right now. Stops already on your phone still open.',
    },
    componentsTitle: 'Components',
    components: {
      api: { name: 'API', description: 'Sign-in, address search and route planning' },
      database: { name: 'Database', description: 'Accounts, plans and synced data' },
      cache: { name: 'Cache', description: 'Speeds up repeated requests' },
    },
    state: { ok: 'Operational', down: 'Down', unknown: 'Unknown' },
    checkedAt: 'Checked {time} (UTC)',
    responseTime: 'Response time: {ms} ms',
    refreshNote: 'This page checks again every 30 seconds.',
    reload: 'Reload',
    contact: 'Still having trouble? Write to {email}.',
  },
  pt: {
    metaTitle: 'Status do RouteWise',
    kicker: 'Status do sistema',
    headline: {
      operational: 'Tudo funcionando',
      degraded: 'Funcionando, com um pequeno problema',
      down: 'O RouteWise está com problemas',
    },
    summary: {
      operational: 'Dá para entrar, buscar endereços e planejar rotas normalmente.',
      degraded: 'O app funciona, mas o cache está fora do ar e algumas telas podem demorar mais para carregar.',
      down: 'Entrar, buscar endereços e planejar rotas pode falhar agora. As paradas que já estão no seu celular continuam abrindo.',
    },
    componentsTitle: 'Componentes',
    components: {
      api: { name: 'API', description: 'Login, busca de endereços e planejamento de rotas' },
      database: { name: 'Banco de dados', description: 'Contas, planos e dados sincronizados' },
      cache: { name: 'Cache', description: 'Acelera pedidos repetidos' },
    },
    state: { ok: 'Funcionando', down: 'Fora do ar', unknown: 'Desconhecido' },
    checkedAt: 'Verificado em {time} (UTC)',
    responseTime: 'Tempo de resposta: {ms} ms',
    refreshNote: 'Esta página verifica de novo a cada 30 segundos.',
    reload: 'Atualizar',
    contact: 'Ainda com problemas? Escreva para {email}.',
  },
  fr: {
    metaTitle: 'État de RouteWise',
    kicker: 'État du système',
    headline: {
      operational: 'Tout fonctionne',
      degraded: 'Ça fonctionne, avec un petit problème',
      down: 'RouteWise a des problèmes',
    },
    summary: {
      operational: 'Vous pouvez vous connecter, chercher des adresses et planifier vos itinéraires comme d’habitude.',
      degraded: 'L’application fonctionne, mais le cache est en panne et certains écrans peuvent prendre plus de temps à charger.',
      down: 'La connexion, la recherche d’adresses et la planification d’itinéraires peuvent échouer en ce moment. Les arrêts déjà sur votre téléphone restent accessibles.',
    },
    componentsTitle: 'Composants',
    components: {
      api: { name: 'API', description: 'Connexion, recherche d’adresses et planification d’itinéraires' },
      database: { name: 'Base de données', description: 'Comptes, forfaits et données synchronisées' },
      cache: { name: 'Cache', description: 'Accélère les requêtes répétées' },
    },
    state: { ok: 'Fonctionnel', down: 'En panne', unknown: 'Inconnu' },
    checkedAt: 'Vérifié le {time} (UTC)',
    responseTime: 'Temps de réponse : {ms} ms',
    refreshNote: 'Cette page vérifie de nouveau toutes les 30 secondes.',
    reload: 'Actualiser',
    contact: 'Toujours un problème? Écrivez à {email}.',
  },
  es: {
    metaTitle: 'Estado de RouteWise',
    kicker: 'Estado del sistema',
    headline: {
      operational: 'Todo funciona',
      degraded: 'Funciona, con un pequeño problema',
      down: 'RouteWise tiene problemas',
    },
    summary: {
      operational: 'Puedes iniciar sesión, buscar direcciones y planificar rutas como siempre.',
      degraded: 'La app funciona, pero la caché está caída y algunas pantallas pueden tardar más en cargar.',
      down: 'El inicio de sesión, la búsqueda de direcciones y la planificación de rutas pueden fallar ahora. Las paradas que ya están en tu teléfono se siguen abriendo.',
    },
    componentsTitle: 'Componentes',
    components: {
      api: { name: 'API', description: 'Inicio de sesión, búsqueda de direcciones y planificación de rutas' },
      database: { name: 'Base de datos', description: 'Cuentas, planes y datos sincronizados' },
      cache: { name: 'Caché', description: 'Hace más rápidas las solicitudes repetidas' },
    },
    state: { ok: 'Operativo', down: 'Caído', unknown: 'Desconocido' },
    checkedAt: 'Comprobado el {time} (UTC)',
    responseTime: 'Tiempo de respuesta: {ms} ms',
    refreshNote: 'Esta página vuelve a comprobar cada 30 segundos.',
    reload: 'Recargar',
    contact: '¿Sigues con problemas? Escribe a {email}.',
  },
};
