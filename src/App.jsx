import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';

// --- SIMULACIÓN DE Iconos (lucide-react) ---
// En un proyecto real, usarías: import { IconName } from 'lucide-react';

const SvgIcon = ({ size = 24, strokeWidth = 2, children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

// ... (Iconos Home, LineChart, Building, Send, FileCheck, Users, LogOut, Check, Eye, X, ChevronDown, PieChart, AlertCircle, List, Download, Edit, Info, Scaling, DollarSign, Calculator, Bell, AlertTriangle, CheckCircle2) ...

const Home = (props) => (
  <SvgIcon {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </SvgIcon>
);

const LineChart = (props) => (
  <SvgIcon {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </SvgIcon>
);

const Building = (props) => (
  <SvgIcon {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </SvgIcon>
);

const Send = (props) => (
  <SvgIcon {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="m22 2-11 11" />
  </SvgIcon>
);

const FileCheck = (props) => (
  <SvgIcon {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </SvgIcon>
);

const Users = (props) => (
  <SvgIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </SvgIcon>
);

const LogOut = (props) => (
  <SvgIcon {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </SvgIcon>
);

const Check = (props) => (
  <SvgIcon {...props}>
    <polyline points="20 6 9 17 4 12" />
  </SvgIcon>
);

const Eye = (props) => (
  <SvgIcon {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);

const X = (props) => (
  <SvgIcon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </SvgIcon>
);

const ChevronDown = (props) => (
  <SvgIcon {...props}>
    <path d="m6 9 6 6 6-6" />
  </SvgIcon>
);

const PieChart = (props) => (
  <SvgIcon {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </SvgIcon>
);

const AlertCircle = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </SvgIcon>
);

const List = (props) => (
  <SvgIcon {...props}>
    <line x1="8" x2="21" y1="6" y2="6" />
    <line x1="8" x2="21" y1="12" y2="12" />
    <line x1="8" x2="21" y1="18" y2="18" />
    <line x1="3" x2="3.01" y1="6" y2="6" />
    <line x1="3" x2="3.01" y1="12" y2="12" />
    <line x1="3" x2="3.01" y1="18" y2="18" />
  </SvgIcon>
);

const Download = (props) => (
  <SvgIcon {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </SvgIcon>
);

const Edit = (props) => (
  <SvgIcon {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </SvgIcon>
);

const Info = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </SvgIcon>
);

const Scaling = (props) => (
  <SvgIcon {...props}>
    <path d="m16 16 3-8 3 8c-.8.9-2 1.5-3.5 1.5-1.5 0-2.7-.6-3.5-1.5Z" />
    <path d="m2 16 3-8 3 8c-.8.9-2 1.5-3.5 1.5-1.5 0-2.7-.6-3.5-1.5Z" />
    <path d="M12 3v18" />
    <path d="M7 12h10" />
  </SvgIcon>
);

const DollarSign = (props) => (
  <SvgIcon {...props}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </SvgIcon>
);

const Calculator = (props) => (
  <SvgIcon {...props}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <line x1="16" x2="12" y1="14" y2="14" />
    <line x1="12" x2="12" y1="14" y2="18" />
    <line x1="8" x2="8" y1="10" y2="18" />
    <line x1="8" x2="16" y1="10" y2="10" />
  </SvgIcon>
);

const Bell = (props) => (
  <SvgIcon {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </SvgIcon>
);

const AlertTriangle = (props) => (
  <SvgIcon {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </SvgIcon>
);

const CheckCircle2 = (props) => (
  <SvgIcon {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </SvgIcon>
);

// --- ¡NUEVO ICONO! ---
const UsersRound = (props) => (
  <SvgIcon {...props}>
    <path d="M18 21a8 8 0 0 0-16 0" />
    <circle cx="10" cy="8" r="5" />
    <path d="M22 20c0-3.37-2-6.5-4-8" />
  </SvgIcon>
);


// --- FUNCIÓN DE UTILIDAD GLOBAL ---
const normalizeToLitros = (value, unit) => {
  const num = parseFloat(value) || 0;
  if (unit === 'miles_litros') return num * 1000;
  if (unit === 'millones_litros') return num * 1000000;
  return num;
};

// --- 1. LAYOUTS ---
// --- Layout Público ---
const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-inter">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-indigo-700">
                OLE
              </span>
              <span className="text-xl font-semibold text-slate-700 hidden sm:inline-block">
                Observatorio Lácteo
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-slate-500">Rol: Público</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-slate-500">
            © 2025 Observatorio Lácteo del Ecuador. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Layout de Industria y Observatorio (Layouts privados) ---
const PrivateLayout = ({ user, logout, sidebarNav, children }) => {
  return (
    <div className="flex h-screen bg-slate-50 font-inter">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        <div className="h-16 flex items-center justify-center px-4">
          <span className="text-2xl font-bold text-white">OLE</span>
          <span className="ml-2 text-xl font-semibold text-slate-300">{user.role === 'industry' ? 'Industria' : 'Observatorio'}</span>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {sidebarNav}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-700"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* --- HEADER ACTUALIZADO CON CAMPANA --- */}
        <header className="h-16 bg-white border-b border-slate-200 flex justify-end items-center px-6">
          <div className="flex items-center space-x-4">
            <NotificationBell />
            <div className="text-right">
              <div className="font-semibold text-slate-700">{user.company?.name || 'Administrador'}</div>
              <div className="text-sm text-slate-500">{user.email}</div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

// --- Layout de Industria (Contenedor) ---
const IndustryLayout = () => {
  const { logout, user } = useAppContext();
  const [activeView, setActiveView] = useState('dashboard');

  const views = {
    dashboard: <IndustryDashboard />,
    history: <IndustryHistory setActiveView={setActiveView} />,
    production: <ProductionForm />,
  };

  const navigation = (
    <>
      <NavItem icon={<Home />} label="Dashboard" isActive={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} />
      <NavItem icon={<List />} label="Historial de Envíos" isActive={activeView === 'history'} onClick={() => setActiveView('history')} />
      <NavItem icon={<Send />} label="Enviar Producción" isActive={activeView === 'production'} onClick={() => setActiveView('production')} />
    </>
  );

  return <PrivateLayout user={user} logout={logout} sidebarNav={navigation}>{views[activeView]}</PrivateLayout>;
};

// --- Layout del Observatorio (Contenedor) ---
const ObservatoryLayout = () => {
  const { logout, user } = useAppContext();
  const [activeView, setActiveView] = useState('dashboard');
  
  // --- ¡NUEVO! Vistas del Admin actualizadas ---
  const views = {
    dashboard: <ObservatoryDashboard />,
    gestor: <IndustryManagement />, // <-- Vista de gestión
    emdi: <PublicDashboard adminView={true} />,
  };

  const navigation = (
    <>
      <NavItem icon={<FileCheck />} label="Log de Envíos" isActive={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} />
      {/* --- ¡NUEVO! Link del Sidebar actualizado --- */}
      <NavItem icon={<UsersRound />} label="Gestión de Industrias" isActive={activeView === 'gestor'} onClick={() => setActiveView('gestor')} />
      <NavItem icon={<LineChart />} label="Dashboard EMDI" isActive={activeView === 'emdi'} onClick={() => setActiveView('emdi')} />
    </>
  );

  return <PrivateLayout user={user} logout={logout} sidebarNav={navigation}>{views[activeView]}</PrivateLayout>;
};

// Componente NavItem (usado en sidebars)
const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
        isActive 
          ? 'bg-slate-700 text-white' 
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {React.cloneElement(icon, { className: "mr-3 h-5 w-5" })}
      {label}
    </button>
  );
};


// --- ¡NUEVO! Centro de Notificaciones ---
const NotificationBell = () => {
  const { db, user, markNotificationsRead } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const myNotifications = useMemo(() => {
    if (!db || !db.notifications) return [];
    return Array.from(db.notifications.values())
      .filter(n => n.userId === user.email)
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [db, user.email]);

  const unreadCount = useMemo(() => {
    return myNotifications.filter(n => !n.read).length;
  }, [myNotifications]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleMarkRead = () => {
    markNotificationsRead();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={handleToggle} className="relative text-slate-500 hover:text-indigo-600">
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
          <div className="p-4 border-b border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800">Notificaciones</h4>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {myNotifications.length === 0 ? (
              <p className="text-slate-500 text-sm p-4 text-center">No tiene notificaciones.</p>
            ) : (
              <div className="divide-y divide-slate-100">
                {myNotifications.map(notif => (
                  <div key={notif.id} className={`p-4 ${!notif.read ? 'bg-indigo-50' : 'bg-white'}`}>
                    <p className="text-sm text-slate-700">{notif.text}</p>
                    <p className="text-xs text-slate-400 mt-1">{notif.createdAt.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {unreadCount > 0 && (
            <div className="p-2 bg-slate-50 border-t border-slate-200">
              <button
                onClick={handleMarkRead}
                className="w-full text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Marcar todas como leídas
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


// --- 2. VISTAS ---

// --- Vista Pública: Dashboard EMDI ---
const PublicDashboard = ({ adminView = false }) => {
  const { db } = useAppContext();
  const [emdiData, setEmdiData] = useState(null);

  useEffect(() => {
    // Lógica de cálculo (sin cambios)
    const responses = Array.from(db.emdiResponses.values());
    if (responses.length === 0) {
      setEmdiData({ global: 0, pillars: [], questions: [] });
      return;
    }
    const getScore = (question, answer) => {
      if (question === 'q1' || question === 'q2' || question === 'q3') {
        if (answer === 'En crecimiento' || answer === 'Subirá 1–5%' || answer === 'Subirá >5%') return 100;
        if (answer === 'Similar (±1%)' || answer === 'Estable') return 50;
        return 0;
      }
      if (question === 'q4') {
        if (answer === 'Abundante') return 100;
        if (answer === 'Justa') return 50;
        return 0;
      }
      if (question === 'q6') {
        if (answer.includes('Bajaron')) return 100;
        if (answer.includes('Se mantuvieron')) return 50;
        return 0;
      }
      if (question === 'q11') {
        if (answer === 'Más oportunidades') return 100;
        if (answer === 'No ha cambiado') return 50;
        return 0;
      }
      if (question === 'q8' || question === 'q9') {
        if (answer === 'Subirá 1–5%' || answer === 'Subirá >5%') return 100;
        if (answer === 'Se mantendrán') return 50;
        return 0;
      }
      return 50;
    };
    const pillarScores = { p1: [], p2: [], p3: [], p4: [], p5: [] };
    const questionScores = {};
    responses.forEach(res => {
      Object.entries(res.data).forEach(([qKey, qValue]) => {
        if (!questionScores[qKey]) questionScores[qKey] = [];
        const score = getScore(qKey, qValue);
        questionScores[qKey].push(score);
        if (['q1', 'q2', 'q3'].includes(qKey)) pillarScores.p1.push(score);
        if (['q4'].includes(qKey)) pillarScores.p2.push(score);
        if (['q6'].includes(qKey)) pillarScores.p3.push(score);
        if (['q11'].includes(qKey)) pillarScores.p4.push(score);
        if (['q8', 'q9'].includes(qKey)) pillarScores.p5.push(score);
      });
    });
    const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    const pillars = [
      { id: 'p1', name: 'Mercado', score: avg(pillarScores.p1) },
      { id: 'p2', name: 'Oferta', score: avg(pillarScores.p2) },
      { id: 'p3', name: 'Costos', score: avg(pillarScores.p3) },
      { id: 'p4', name: 'Riesgos', score: avg(pillarScores.p4) },
      { id: 'p5', name: 'Perspectivas', score: avg(pillarScores.p5) },
    ];
    const questions = Object.entries(questionScores).map(([key, scores]) => ({
      key: key,
      label: db.emdiQuestions.get(key) || key,
      score: avg(scores),
    }));
    const globalScore = avg(pillars.map(p => p.score));
    setEmdiData({ global: globalScore, pillars, questions });
  }, [db]);

  if (!emdiData) {
    return <div className="text-center text-slate-500">Calculando EMDI...</div>;
  }

  return (
    <div className="space-y-6">
      {!adminView && (
        <h1 className="text-3xl font-semibold text-slate-900">
          Índice Mensual Lácteo (EMDI) - Octubre 2025
        </h1>
      )}
      
      {/* Global Score */}
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">EMDI Global</h2>
        <p className="text-5xl font-bold text-indigo-600 mt-2">
          {emdiData.global.toFixed(1)}
          <span className="text-3xl text-slate-400">/100</span>
        </p>
        <div className="w-full bg-slate-200 rounded-full h-3 mt-4 overflow-hidden">
          <div 
            className="bg-indigo-600 h-3 rounded-full" 
            style={{ width: `${emdiData.global}%` }}
          ></div>
        </div>
      </div>

      {/* Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {emdiData.pillars.map(pillar => (
          <PillarCard key={pillar.id} pillar={pillar} />
        ))}
      </div>

      {/* Acordeón de Preguntas */}
      <Accordion title="Puntaje por Pregunta Individual">
        <div className="divide-y divide-slate-100 p-2">
          {emdiData.questions.map(q => (
            <div key={q.key} className="flex justify-between items-center p-3 rounded-md hover:bg-slate-50">
              <span className="text-sm text-slate-700">{q.label}</span>
              <span className="text-sm font-semibold text-slate-900">{q.score.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

const PillarCard = ({ pillar }) => {
  const getScoreColor = (score) => {
    if (score > 70) return 'text-green-600';
    if (score > 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
      <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{pillar.name}</h3>
      <p className={`text-4xl font-bold mt-2 ${getScoreColor(pillar.score)}`}>
        {pillar.score.toFixed(1)}
      </p>
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left hover:bg-slate-50"
      >
        <span className="text-lg font-semibold text-slate-800">{title}</span>
        <ChevronDown 
          className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
};


// --- Vista de Industria: Dashboard ---
const IndustryDashboard = () => {
  const { db, user, currentPeriod } = useAppContext();
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    const subId = `${user.companyId}-${currentPeriod}`;
    const sub = db.submissions.get(subId);
    setSubmission(sub);
  }, [db, user, currentPeriod]);

  if (!submission) {
    return <div className="text-slate-500">Cargando estado...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">
        Estado de Envíos - {currentPeriod}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatusCard title="Producción" status={submission.production.status} observation={submission.production.observations} />
        <StatusCard title="EMDI" status={submission.emdi.status} observation={submission.emdi.observations} />
      </div>
    </div>
  );
};


// --- VISTA: Historial de Industria (ACTUALIZADA) ---
const IndustryHistory = ({ setActiveView }) => {
  const { db, user, currentPeriod } = useAppContext();
  const [mySubmissions, setMySubmissions] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  
  // --- ¡NUEVO! Estado para el modal de "Ver" ---
  const [viewingSubmission, setViewingSubmission] = useState(null);

  useEffect(() => {
    const allSubs = Array.from(db.submissions.values());
    const filtered = allSubs
      .filter(sub => sub.companyId === user.companyId)
      .sort((a, b) => b.period.localeCompare(a.period));
    setMySubmissions(filtered);
  }, [db, user]);

  // --- Lógica de descarga de CSV (ACTUALIZADA para quitar CBT) ---
  const convertDataToCSV = (submission) => {
    const data = submission.production.data;
    const headers = [
      "Periodo", 
      "Volumen Centros", "Unidad Centros", "Volumen Ganaderos", "Unidad Ganaderos", "Volumen Total (L)",
      "Precio Centros", "Precio Ganaderos", "Precio Promedio",
      // Totales
      "Total Grasa %", "Total Solidos Totales %", "Total Solidos No Grasos %", "Total Proteina %", "Total Proteina Cruda %", "Total Proteina Verdadera %", "Total UFC", "Total CCS",
      // Ganaderos
      "Ganaderos Grasa %", "Ganaderos Solidos Totales %", "Ganaderos Solidos No Grasos %", "Ganaderos Proteina %", "Ganaderos Proteina Cruda %", "Ganaderos Proteina Verdadera %", "Ganaderos UFC", "Ganaderos CCS",
      // Centros
      "Centros Grasa %", "Centros Solidos Totales %", "Centros Solidos No Grasos %", "Centros Proteina %", "Centros Proteina Cruda %", "Centros Proteina Verdadera %", "Centros UFC", "Centros CCS"
    ];
    
    const row = [
      submission.period,
      data.volCentros, data.unitCentros, data.volGanaderos, data.unitGanaderos, data.volTotal,
      data.precioCentros, data.precioGanaderos, data.precioPromedio,
      // Totales
      data.total_grasa, data.total_solidos_totales, data.total_solidos_no_grasos, data.total_proteina, data.total_proteina_cruda, data.total_proteina_verdadera, data.total_ufc, data.total_css,
      // Ganaderos
      data.compGanaderos.grasa, data.compGanaderos.solidos_totales, data.compGanaderos.solidos_no_grasos, data.compGanaderos.proteina, data.compGanaderos.proteina_cruda, data.compGanaderos.proteina_verdadera, data.compGanaderos.ufc, data.compGanaderos.ccs,
      // Centros
      data.compCentros.grasa, data.compCentros.solidos_totales, data.compCentros.solidos_no_grasos, data.compCentros.proteina, data.compCentros.proteina_cruda, data.compCentros.proteina_verdadera, data.compCentros.ufc, data.compCentros.ccs
    ];
    
    const escape = (val) => `"${String(val || '').replace(/"/g, '""')}"`;
    const headerString = headers.join(',');
    const rowString = row.map(escape).join(',');
    
    return '\uFEFF' + headerString + '\n' + rowString;
  };

  const handleDownload = (sub) => {
    console.log(`Generando CSV para ${sub.period}...`);
    
    const csvContent = convertDataToCSV(sub);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Reporte_OLE_${sub.period}.csv`);
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setToastMessage(`Descargando ${sub.period}.csv ...`);
    setTimeout(() => setToastMessage(null), 3000);
  };
  // --- Fin de la lógica de descarga ---

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-6">
        Historial de Envíos
      </h1>

      {toastMessage && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {/* AUMENTADO PADDING */}
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Período</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado Producción</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Fecha Envío (Simulada)</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {mySubmissions.map(sub => (
              <tr key={sub.id} className="hover:bg-slate-50">
                {/* AUMENTADO PADDING */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{sub.period}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={sub.production.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {sub.period === '2025-10' ? '2025-10-05' : (sub.period === '2025-08' ? '2025-09-05' : '2025-08-05')}
                </td>
                {/* --- ¡NUEVO! Lógica de botones "Ver" y "Editar" --- */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {/* --- CORRECCIÓN DE UI: Contenedor flex para alinear botones --- */}
                  <div className="flex items-center space-x-2">
                    {/* Botón "Ver" para TODOS los estados */}
                    <button
                      onClick={() => setViewingSubmission(sub.production.data)}
                      className="flex items-center px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-md font-medium hover:bg-slate-200"
                    >
                      <Eye className="h-4 w-4 mr-1.5" />
                      Ver
                    </button>
                    
                    {/* Botón "Editar" SÓLO para 'draft' u 'observed' */}
                    {(sub.production.status === 'draft' || (sub.production.status === 'observed' && sub.period === currentPeriod)) && (
                      <button
                        onClick={() => setActiveView('production')}
                        className="flex items-center px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-md font-medium hover:bg-yellow-200"
                      >
                        <Edit className="h-4 w-4 mr-1.5" />
                        Editar
                      </button>
                    )}

                    {/* Botón "Descargar" SÓLO para 'approved' */}
                    {sub.production.status === 'approved' && (
                      <button
                        onClick={() => handleDownload(sub)}
                        className="flex items-center px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-md font-medium hover:bg-slate-200"
                      >
                        <Download className="h-4 w-4 mr-1.5" />
                        Descargar
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* --- ¡NUEVO! Renderizado del Modal de "Ver" --- */}
      {viewingSubmission && (
        <SubmissionSummaryModal
          isOpen={!!viewingSubmission}
          onClose={() => setViewingSubmission(null)}
          formData={viewingSubmission}
          readOnly={true} // <-- Importante: modo solo lectura
        />
      )}
    </div>
  );
};


const StatusCard = ({ title, status, observation }) => {
  const statusConfig = {
    draft: { text: 'Borrador', color: 'bg-gray-400' },
    submitted: { text: 'En Revisión', color: 'bg-blue-600' }, // <-- CAMBIO DE TEXTO
    observed: { text: 'Observado', color: 'bg-yellow-500' },
    approved: { text: 'Aprobado', color: 'bg-green-600' },
  };

  const config = statusConfig[status] || statusConfig.draft;
  
  // ¡NUEVO! Contar observaciones si es un objeto
  const observationCount = (typeof observation === 'object' && observation !== null) 
    ? Object.keys(observation).length 
    : (observation ? 1 : 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${config.color}`}>
          {config.text}
        </span>
      </div>
      {status === 'observed' && observationCount > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
          <p className="text-sm font-semibold text-yellow-800">Tiene {observationCount} observación(es).</p>
          <p className="text-sm text-yellow-700 mt-1">Por favor, vaya a "Enviar Producción" para revisarlas.</p>
        </div>
      )}
    </div>
  );
};


// --- Vista de Industria: Formulario de Producción (ACTUALIZADO) ---
const ProductionForm = () => {
  const { db, user, currentPeriod, updateSubmission, createNotification } = useAppContext(); // <-- ¡NUEVO! Añadir createNotification
  const [step, setStep] = useState(1);
  
  // Estado inicial del formulario (ACTUALIZADO para quitar CBT)
  const [formData, setFormData] = useState({
    // Paso 1
    volCentros: '', unitCentros: 'litros',
    volGanaderos: '', unitGanaderos: 'litros',
    volTotal: 0,
    // Paso 2
    precioCentros: '', precioGanaderos: '',
    precioPromedio: 0,
    // Paso 3
    compGanaderos: { 
      grasa: '', proteina: '', ccs: '', ufc: '', 
      solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: ''
    },
    // Paso 4
    compCentros: { 
      grasa: '', proteina: '', ccs: '', ufc: '',
      solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: ''
    },
    // Paso 5 (Calculados)
    total_grasa: 0, total_solidos_totales: 0, total_solidos_no_grasos: 0,
    total_proteina: 0, total_proteina_cruda: 0, total_proteina_verdadera: 0,
    total_ufc: 0, total_css: 0,
  });
  
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  
  // --- ¡NUEVO! Estado del Modal de Resumen ---
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  
  // --- ¡NUEVO! Estado para guardar las observaciones ---
  const [observations, setObservations] = useState({});

  useEffect(() => {
    const subId = `${user.companyId}-${currentPeriod}`;
    const sub = db.submissions.get(subId);
    if (sub && (sub.production.status === 'draft' || sub.production.status === 'observed')) {
      if (sub.production.data && Object.keys(sub.production.data).length > 0) {
        const loadedData = {
          ...formData, 
          ...sub.production.data,
          compGanaderos: { ...formData.compGanaderos, ...(sub.production.data.compGanaderos || {}) },
          compCentros: { ...formData.compCentros, ...(sub.production.data.compCentros || {}) }
        };
        setFormData(loadedData);
        // --- ¡NUEVO! Cargar observaciones
        if (sub.production.status === 'observed' && sub.production.observations) {
          setObservations(sub.production.observations);
        }
      }
    }
  }, [db, user, currentPeriod]);

  // --- Lógica de Cálculos en Cascada (ACTUALIZADA para quitar CBT) ---

  // Volumen y Precio (sin cambios)
  const volCentrosLitros = useMemo(() => normalizeToLitros(formData.volCentros, formData.unitCentros), [formData.volCentros, formData.unitCentros]);
  const volGanaderosLitros = useMemo(() => normalizeToLitros(formData.volGanaderos, formData.unitGanaderos), [formData.volGanaderos, formData.unitGanaderos]);
  useEffect(() => {
    const total = volCentrosLitros + volGanaderosLitros;
    setFormData(prev => ({ ...prev, volTotal: total }));
  }, [volCentrosLitros, volGanaderosLitros]);
  useEffect(() => {
    const precioCentros = parseFloat(formData.precioCentros) || 0;
    const precioGanaderos = parseFloat(formData.precioGanaderos) || 0;
    const volTotal = volCentrosLitros + volGanaderosLitros;
    if (volTotal === 0) {
      setFormData(prev => ({ ...prev, precioPromedio: 0 }));
      return;
    }
    const ponderado = (precioCentros * volCentrosLitros + precioGanaderos * volGanaderosLitros) / volTotal;
    setFormData(prev => ({ ...prev, precioPromedio: ponderado }));
  }, [formData.precioCentros, formData.precioGanaderos, volCentrosLitros, volGanaderosLitros]);

  // --- Cálculo Ponderado de Composición (ACTUALIZADO para quitar CBT) ---
  useEffect(() => {
    const volTotal = volCentrosLitros + volGanaderosLitros;
    
    const calcPonderado = (key) => {
      if (volTotal === 0) return 0;
      const valGan = parseFloat(formData.compGanaderos[key]) || 0;
      const valCen = parseFloat(formData.compCentros[key]) || 0;
      return (valGan * volGanaderosLitros + valCen * volCentrosLitros) / volTotal;
    };

    setFormData(prev => ({
      ...prev,
      total_grasa: calcPonderado('grasa'),
      total_solidos_totales: calcPonderado('solidos_totales'),
      total_solidos_no_grasos: calcPonderado('solidos_no_grasos'),
      total_proteina: calcPonderado('proteina'),
      total_proteina_cruda: calcPonderado('proteina_cruda'),
      total_proteina_verdadera: calcPonderado('proteina_verdadera'),
      total_ufc: calcPonderado('ufc'),
      total_css: calcPonderado('ccs'),
    }));
    
  }, [formData.compGanaderos, formData.compCentros, volCentrosLitros, volGanaderosLitros]);


  // --- Lógica de Validación (sin cambios) ---
  const checkForComma = (name, value) => {
    if (String(value).includes(',')) {
      setErrors(prev => ({ ...prev, [name]: true }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    checkForComma(name, value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNestedInputChange = (group, name, value) => {
    checkForComma(`${group}_${name}`, value);
    setFormData(prev => ({ ...prev, [group]: { ...prev[group], [name]: value } }));
  };
  
  const hasCommaError = useMemo(() => {
      return Object.keys(errors).length > 0;
  }, [errors]);
  
  // --- Lógica de Envío (ACTUALIZADA con Modal) ---
  const handleSaveDraft = (e) => {
    e.preventDefault();
    if (hasCommaError) {
       setSubmissionStatus({ type: 'error', message: 'No se puede guardar. Corrija los campos con coma (,).' });
       setTimeout(() => setSubmissionStatus(null), 3000);
       return;
    }
    updateSubmission('production', 'draft', formData, null, {}); // Borra observaciones al guardar borrador
    setObservations({}); // Limpia observaciones locales
    setSubmissionStatus({ type: 'success', message: 'Borrador guardado con éxito.' });
    setTimeout(() => setSubmissionStatus(null), 3000);
  };

  // El submit principal AHORA SOLO ABRE EL MODAL
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasCommaError) {
      setSubmissionStatus({ type: 'error', message: 'No se puede enviar. Corrija los campos con coma (,).' });
      setTimeout(() => setSubmissionStatus(null), 3000);
      return;
    }
    setIsSummaryModalOpen(true);
  };
  
  // Esta función es llamada por el modal para confirmar el envío
  const handleConfirmSubmit = () => {
    updateSubmission('production', 'submitted', formData, null, {}); // Limpia observaciones al enviar
    
    // --- ¡NUEVO! Crear notificación para el Admin ---
    const adminEmail = 'admin@ole.ec';
    createNotification(adminEmail, `La industria ${user.company.name} ha enviado su reporte de producción.`);
    
    setIsSummaryModalOpen(false);
    setObservations({}); // Limpia observaciones locales
    setSubmissionStatus({ type: 'success', message: 'Formulario enviado para revisión.' });
    setTimeout(() => setSubmissionStatus(null), 3000);
  };


  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">
        Formulario de Producción - {currentPeriod}
      </h1>
      <p className="text-slate-600 mb-6">Complete los 5 pasos para enviar su información.</p>

      {/* Alerta de decimales */}
      <div className="bg-yellow-50 text-yellow-900 px-4 py-3 rounded-lg mb-6 border border-yellow-200 flex items-center">
        <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
        <span className="text-sm">
          Atención: Use el punto decimal ( . ) para separar centavos/decimales. No use la coma ( , ).
        </span>
      </div>

      <div className="mb-8">
        <StepIndicator current={step} setStep={setStep} />
      </div>

      <form className="bg-white p-6 sm:p-10 rounded-lg shadow-sm space-y-8">
        {step === 1 && <ProductionStep1 formData={formData} onChange={handleInputChange} errors={errors} observations={observations} />}
        {step === 2 && <ProductionStep2 formData={formData} onChange={handleInputChange} errors={errors} observations={observations} />}
        {step === 3 && <ProductionStep3 formData={formData} onNestedChange={handleNestedInputChange} errors={errors} observations={observations} />}
        {step === 4 && <ProductionStep4 formData={formData} onNestedChange={handleNestedInputChange} errors={errors} observations={observations} />}
        {step === 5 && <ProductionStep5 formData={formData} />}

        {submissionStatus && (
          <div className={`p-4 rounded-md text-sm ${
            submissionStatus.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {submissionStatus.message}
          </div>
        )}

        {/* Botones de Navegación */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50 disabled:opacity-50"
          >
            Anterior
          </button>
          
          <div className="space-x-3">
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={hasCommaError}
              className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-md shadow-sm hover:bg-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Guardar Borrador
            </button>
            {step === 5 ? (
              <button
                type="button" // <-- CAMBIADO de 'submit' a 'button'
                onClick={handleSubmit} // <-- Abre el modal
                disabled={hasCommaError}
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Guardar y Enviar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(s => Math.min(5, s + 1))}
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      </form>
      
      {/* --- ¡NUEVO! Renderizado del Modal de Resumen --- */}
      <SubmissionSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        onConfirm={handleConfirmSubmit}
        formData={formData}
      />
    </div>
  );
};

// --- ¡NUEVO! Componente Tooltip ---
const Tooltip = ({ text, children }) => (
  <div className="relative flex items-center group">
    {children}
    {/* El tooltip se mostrará a la derecha */}
    <div className="absolute left-full ml-3 px-3 py-2 w-56 bg-slate-800 text-white text-xs rounded-lg shadow-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity z-10 
                    pointer-events-none break-words">
      {text}
      {/* Triángulo del tooltip */}
      <svg className="absolute text-slate-800 h-2 w-2 left-0 -ml-1 top-1/2 -translate-y-1/2 transform rotate-90" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
    </div>
  </div>
);


// --- StepIndicator (ACTUALIZADO CON ICONOS) ---
const steps = [
  { number: 1, title: 'Volumen', icon: Scaling },
  { number: 2, title: 'Precios', icon: DollarSign },
  { number: 3, title: 'Comp. Ganaderos', icon: Users },
  { number: 4, title: 'Comp. Centros', icon: Building },
  { number: 5, title: 'Totales', icon: Calculator }
];

const StepIndicator = ({ current, setStep }) => (
  <nav className="flex items-center justify-between border-b border-slate-200" aria-label="Steps">
    {steps.map((step) => (
      <button
        key={step.number}
        onClick={() => { if (step.number < current) setStep(step.number); }}
        disabled={step.number > current}
        className={`flex-1 group ${step.number < current ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className={`flex flex-col items-center py-4 border-b-2 transition-colors duration-150
          ${step.number === current
            ? 'border-indigo-600 text-indigo-600'
            : `border-transparent ${step.number < current ? 'text-slate-600 group-hover:text-indigo-600' : 'text-slate-400'}`
          }
        `}>
          <div className={`h-8 w-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-150
            ${step.number === current
              ? 'bg-indigo-600 text-white'
              : step.number < current
              ? 'bg-green-500 text-white'
              : 'bg-slate-200 text-slate-500'
            }
          `}>
            {/* Lógica de Iconos: Check si está completo, si no, el icono del paso */}
            {step.number < current ? <Check size={18} /> : <step.icon size={18} />}
          </div>
          <span className={`text-xs mt-2 font-medium hidden sm:block ${
            step.number === current
              ? 'text-indigo-600 font-semibold'
              : step.number < current
              ? 'text-slate-600 group-hover:text-indigo-600'
              : 'text-slate-500'
          }`}>
            {step.title}
          </span>
        </div>
      </button>
    ))}
  </nav>
);

// --- Componente Input con Unidad (ACTUALIZADO CON DISEÑO SUTIL) ---
const InputWithUnit = ({ label, name, value, unit, unitName, onValueChange, onUnitChange, error, observation, ...props }) => {
  // ¡NUEVO! Error si hay coma O si hay observación
  const hasError = error || !!observation;
  // --- CORRECCIÓN DE UI: Quitado focus-within:bg-white ---
  const errorClasses = hasError ? 'border-red-500' : 'border-slate-300 focus-within:border-indigo-600 focus-within:border-b-2';
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className={`flex items-center transition-colors border-b ${errorClasses} bg-transparent`}>
        <input
          type="text" 
          inputMode="decimal"
          id={name}
          name={name}
          value={value}
          onChange={onValueChange}
          className="flex-1 block w-full sm:text-sm bg-transparent border-0 focus:ring-0 pl-3 py-2"
          {...props}
        />
        <div className="flex items-center">
          <select
            name={unitName}
            value={unit}
            onChange={onUnitChange}
            className="h-full py-0 pl-2 pr-8 border-transparent bg-transparent text-slate-500 focus:ring-0 focus:border-0 sm:text-sm rounded-r-md"
          >
            <option value="litros">Litros</option>
            <option value="miles_litros">Miles de Litros</option>
            <option value="millones_litros">Millones de Litros</option>
          </select>
        </div>
      </div>
      {/* ¡NUEVO! Mostrar error de coma O la observación */}
      {error && <p className="mt-1 text-xs text-red-600">No usar comas ( , ). Use punto ( . ) para decimales.</p>}
      {observation && <p className="mt-1 text-xs text-red-600">Observación: {observation}</p>}
    </div>
  );
};

// --- Componente Input con Unidad FIJA (ACTUALIZADO CON DISEÑO SUTIL) ---
const SimpleInputWithUnit = ({ label, name, value, onChange, error, unit, tooltipText, observation, ...props }) => {
  const hasError = error || !!observation;
  // --- CORRECCIÓN DE UI: Quitado focus-within:bg-white ---
  const errorClasses = hasError ? 'border-red-500' : 'border-slate-300 focus-within:border-indigo-600 focus-within:border-b-2';
  
  const labelContent = (
    <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
      {label}
    </label>
  );

  return (
    <div className="flex flex-col">
      {tooltipText ? (
        <Tooltip text={tooltipText}>
          <div className="flex items-center">
            {labelContent}
            <Info className="h-4 w-4 ml-1.5 text-slate-400 cursor-help" />
          </div>
        </Tooltip>
      ) : (
        labelContent
      )}
      <div className={`flex items-center transition-colors border-b ${errorClasses} bg-transparent`}>
        <input
          type="text"
          inputMode="decimal"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="flex-1 block w-full sm:text-sm bg-transparent border-0 focus:ring-0 pl-3 py-2"
          {...props}
        />
        <div className="flex items-center px-3">
          <span className="text-slate-500 sm:text-sm">{unit}</span>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">No usar comas ( , ).</p>}
      {observation && <p className="mt-1 text-xs text-red-600">Observación: {observation}</p>}
    </div>
  );
};

// --- Componente Input Deshabilitado (ACTUALIZADO CON DISEÑO SUTIL) ---
const DisabledInput = ({ label, value, unit }) => (
  <div className="flex flex-col">
    <label className="block text-sm font-medium text-slate-700 mb-1">
      {label}
    </label>
    <div className="flex items-center border-b border-slate-300 bg-slate-100 overflow-hidden rounded-t-md">
      <input 
        type="text" 
        value={value}
        disabled 
        className="flex-1 w-full bg-slate-100 border-0 text-slate-600 cursor-not-allowed pl-3 py-2"
      />
      {unit && (
        <div className="flex items-center border-l border-slate-300 px-3 bg-slate-200 h-full">
          <span className="text-slate-500 sm:text-sm">{unit}</span>
        </div>
      )}
    </div>
  </div>
);

// --- Pasos del Formulario (ACTUALIZADOS CON OBSERVACIONES) ---

const ProductionStep1 = ({ formData, onChange, errors, observations }) => (
  <div className="space-y-6">
    <h3 className="flex items-center text-lg font-medium text-slate-900 border-b border-slate-200 pb-3 mb-6">
      <Scaling className="h-5 w-5 mr-2 text-indigo-600" />
      Paso 1: Volumen
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <InputWithUnit
        label="Volumen Centros de Acopio"
        name="volCentros"
        value={formData.volCentros}
        unit={formData.unitCentros}
        unitName="unitCentros"
        onValueChange={onChange}
        onUnitChange={onChange}
        error={errors.volCentros}
        observation={observations?.volCentros}
      />
      <InputWithUnit
        label="Volumen Ganaderos"
        name="volGanaderos"
        value={formData.volGanaderos}
        unit={formData.unitGanaderos}
        unitName="unitGanaderos"
        onValueChange={onChange}
        onUnitChange={onChange}
        error={errors.volGanaderos}
        observation={observations?.volGanaderos}
      />
      <div className="md:col-span-2">
        <DisabledInput
          label="Volumen Total (Calculado)"
          value={formData.volTotal.toLocaleString('en-US')}
          unit="Litros"
        />
      </div>
    </div>
  </div>
);

const ProductionStep2 = ({ formData, onChange, errors, observations }) => (
  <div className="space-y-6">
    <h3 className="flex items-center text-lg font-medium text-slate-900 border-b border-slate-200 pb-3 mb-6">
      <DollarSign className="h-5 w-5 mr-2 text-indigo-600" />
      Paso 2: Precios
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <SimpleInputWithUnit
        label="Precio Centros de Acopio"
        name="precioCentros"
        value={formData.precioCentros}
        onChange={onChange}
        error={errors.precioCentros}
        observation={observations?.precioCentros}
        unit="$/L"
      />
      <SimpleInputWithUnit
        label="Precio Ganaderos"
        name="precioGanaderos"
        value={formData.precioGanaderos}
        onChange={onChange}
        error={errors.precioGanaderos}
        observation={observations?.precioGanaderos}
        unit="$/L"
      />
      <div className="md:col-span-2">
        <DisabledInput
          label="Precio Promedio Ponderado (Calculado)"
          value={formData.precioPromedio > 0 ? `$ ${formData.precioPromedio.toFixed(4)}` : '$ 0.00'}
          unit="$/L"
        />
      </div>
    </div>
  </div>
);

// --- Grilla de Composición (ACTUALIZADA CON OBSERVACIONES) ---
const CompositionGrid = ({ title, groupName, data, onChange, errors, icon, observations }) => (
  <div className="space-y-6">
    <h3 className="flex items-center text-lg font-medium text-slate-900 border-b border-slate-200 pb-3 mb-6">
      {React.cloneElement(icon, { className: "h-5 w-5 mr-2 text-indigo-600" })}
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
      <SimpleInputWithUnit
        label="Grasa"
        unit="%"
        name="grasa"
        value={data.grasa}
        onChange={(e) => onChange(groupName, 'grasa', e.target.value)}
        error={errors[`${groupName}_grasa`]}
        observation={observations?.[`${groupName}_grasa`]}
      />
      <SimpleInputWithUnit
        label="Proteína"
        unit="%"
        name="proteina"
        value={data.proteina}
        onChange={(e) => onChange(groupName, 'proteina', e.target.value)}
        error={errors[`${groupName}_proteina`]}
        observation={observations?.[`${groupName}_proteina`]}
      />
      <SimpleInputWithUnit
        label="Sólidos Totales"
        unit="%"
        name="solidos_totales"
        value={data.solidos_totales}
        onChange={(e) => onChange(groupName, 'solidos_totales', e.target.value)}
        error={errors[`${groupName}_solidos_totales`]}
        observation={observations?.[`${groupName}_solidos_totales`]}
      />
      <SimpleInputWithUnit
        label="Sólidos No Grasos"
        unit="%"
        name="solidos_no_grasos"
        value={data.solidos_no_grasos}
        onChange={(e) => onChange(groupName, 'solidos_no_grasos', e.target.value)}
        error={errors[`${groupName}_solidos_no_grasos`]}
        observation={observations?.[`${groupName}_solidos_no_grasos`]}
      />
      <SimpleInputWithUnit
        label="Proteína Cruda"
        unit="%"
        name="proteina_cruda"
        value={data.proteina_cruda}
        onChange={(e) => onChange(groupName, 'proteina_cruda', e.target.value)}
        error={errors[`${groupName}_proteina_cruda`]}
        tooltipText="Proteína total, incluyendo nitrógeno no proteico."
        observation={observations?.[`${groupName}_proteina_cruda`]}
      />
      <SimpleInputWithUnit
        label="Proteína Verdadera"
        unit="%"
        name="proteina_verdadera"
        value={data.proteina_verdadera}
        onChange={(e) => onChange(groupName, 'proteina_verdadera', e.target.value)}
        error={errors[`${groupName}_proteina_verdadera`]}
        tooltipText="Proteína real, excluyendo el nitrógeno no proteico."
        observation={observations?.[`${groupName}_proteina_verdadera`]}
      />
      <SimpleInputWithUnit
        label="CCS"
        unit="cél/mL"
        name="ccs"
        value={data.ccs}
        onChange={(e) => onChange(groupName, 'ccs', e.target.value)}
        error={errors[`${groupName}_ccs`]}
        tooltipText="Recuento de Células Somáticas. Indicador de salud de la ubre."
        observation={observations?.[`${groupName}_ccs`]}
      />
      <SimpleInputWithUnit
        label="UFC"
        unit="ufc/mL"
        name="ufc"
        value={data.ufc}
        onChange={(e) => onChange(groupName, 'ufc', e.target.value)}
        error={errors[`${groupName}_ufc`]}
        tooltipText="Unidades Formadoras de Colonias. Indicador de calidad higiénica."
        observation={observations?.[`${groupName}_ufc`]}
      />
    </div>
  </div>
);

const ProductionStep3 = ({ formData, onNestedChange, errors, observations }) => (
  <CompositionGrid
    title="Paso 3: Composición Ganaderos"
    groupName="compGanaderos"
    data={formData.compGanaderos}
    onChange={onNestedChange}
    errors={errors}
    icon={<Users />}
    observations={observations}
  />
);

const ProductionStep4 = ({ formData, onNestedChange, errors, observations }) => (
  <CompositionGrid
    title="Paso 4: Composición Centros de Acopio"
    groupName="compCentros"
    data={formData.compCentros}
    onChange={onNestedChange}
    errors={errors}
    icon={<Building />}
    observations={observations}
  />
);

// --- Paso 5 (sin cambios) ---
const ProductionStep5 = ({ formData }) => (
  <div className="space-y-6">
    <h3 className="flex items-center text-lg font-medium text-slate-900 border-b border-slate-200 pb-3 mb-6">
      <Calculator className="h-5 w-5 mr-2 text-indigo-600" />
      Paso 5: Totales Calculados
    </h3>
    <p className="text-sm text-slate-600">
      Estos son los promedios ponderados calculados en base a los volúmenes y composiciones ingresadas.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
      <DisabledInput label="Grasa Total" unit="%" value={formData.total_grasa.toFixed(4)} />
      <DisabledInput label="Proteína Total" unit="%" value={formData.total_proteina.toFixed(4)} />
      <DisabledInput label="Sólidos Totales" unit="%" value={formData.total_solidos_totales.toFixed(4)} />
      <DisabledInput label="Sólidos No Grasos" unit="%" value={formData.total_solidos_no_grasos.toFixed(4)} />
      <DisabledInput label="Proteína Cruda" unit="%" value={formData.total_proteina_cruda.toFixed(4)} />
      <DisabledInput label="Proteína Verdadera" unit="%" value={formData.total_proteina_verdadera.toFixed(4)} />
      <DisabledInput label="CCS Total" unit="cél/mL" value={formData.total_css.toFixed(2)} />
      <DisabledInput label="UFC Total" unit="ufc/mL" value={formData.total_ufc.toFixed(2)} />
    </div>
  </div>
);


// --- Modal de Resumen de Envío (ACTUALIZADO) ---
const SubmissionSummaryModal = ({ isOpen, onClose, onConfirm, formData, readOnly = false, children }) => {
  if (!isOpen) return null;

  // Datos para el resumen
  const f = formData;
  const volData = [
    { label: 'Vol. Centros Acopio', value: `${Number(f.volCentros).toLocaleString('en-US')} (${f.unitCentros})` },
    { label: 'Vol. Ganaderos', value: `${Number(f.volGanaderos).toLocaleString('en-US')} (${f.unitGanaderos})` },
    { label: 'Volumen Total', value: `${f.volTotal.toLocaleString('en-US')} (Litros)` },
  ];
  
  const precioData = [
    { label: 'Precio Centros', value: `$ ${Number(f.precioCentros).toFixed(4)}` },
    { label: 'Precio Ganaderos', value: `$ ${Number(f.precioGanaderos).toFixed(4)}` },
    { label: 'Precio Ponderado', value: `$ ${f.precioPromedio.toFixed(4)}` },
  ];
  
  const compGanData = [
    { label: 'Grasa', value: `${f.compGanaderos.grasa} %` },
    { label: 'Proteína', value: `${f.compGanaderos.proteina} %` },
    { label: 'Sólidos Totales', value: `${f.compGanaderos.solidos_totales} %` },
    { label: 'CCS', value: `${Number(f.compGanaderos.ccs).toLocaleString('en-US')} cél/mL` },
    { label: 'UFC', value: `${Number(f.compGanaderos.ufc).toLocaleString('en-US')} ufc/mL` },
  ];
  
  const compCenData = [
    { label: 'Grasa', value: `${f.compCentros.grasa} %` },
    { label: 'Proteína', value: `${f.compCentros.proteina} %` },
    { label: 'Sólidos Totales', value: `${f.compCentros.solidos_totales} %` },
    { label: 'CCS', value: `${Number(f.compCentros.ccs).toLocaleString('en-US')} cél/mL` },
    { label: 'UFC', value: `${Number(f.compCentros.ufc).toLocaleString('en-US')} ufc/mL` },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
          <h3 className="text-xl font-semibold text-slate-900">
            Resumen del Envío
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>
        
        {/* --- ¡NUEVO! Ocultar texto si es solo lectura --- */}
        {!readOnly && (
          <p className="text-sm text-slate-600 mb-6">
            Por favor, revise los datos antes de enviarlos. Esta acción no se puede deshacer.
          </p>
        )}
        
        <div className="space-y-6">
          <SummarySection title="Volumen" icon={<Scaling />} data={volData} />
          <SummarySection title="Precios" icon={<DollarSign />} data={precioData} />
          <SummarySection title="Composición Ganaderos" icon={<Users />} data={compGanData} />
          <SummarySection title="Composición Centros" icon={<Building />} data={compCenData} />
        </div>

        {/* --- ¡NUEVO! Lógica de botones --- */}
        {/* Si se pasan 'children', se usan como botones (para el Admin) */}
        {/* Si no, se usan los botones por defecto (para la Industria) */}
        {children ? (
          children
        ) : (
          <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
            >
              Confirmar y Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Componente auxiliar para el modal
const SummarySection = ({ title, icon, data }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
    <h4 className="flex items-center text-lg font-semibold text-slate-800 mb-3">
      {React.cloneElement(icon, { className: "h-5 w-5 mr-2 text-indigo-600" })}
      {title}
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
      {data.map(item => (
        <div key={item.label}>
          <dt className="text-xs font-medium text-slate-500">{item.label}</dt>
          <dd className="text-sm font-semibold text-slate-900">{item.value || '-'}</dd>
        </div>
      ))}
    </div>
  </div>
);


// --- Vista de Observatorio: Dashboard (Log de Envíos) ---
const ObservatoryDashboard = () => {
  const { db, currentPeriod, updateSubmission, createNotification } = useAppContext();
  const [submissions, setSubmissions] = useState([]);
  
  // --- ¡NUEVO! Estados de los modales ---
  const [reviewingSubmission, setReviewingSubmission] = useState(null); // Para el checklist
  const [observingField, setObservingField] = useState(null); // Para el mini-input de texto
  const [fieldObservations, setFieldObservations] = useState({}); // Estado local para las observaciones

  useEffect(() => {
    const subs = Array.from(db.submissions.values())
      .filter(s => s.period === currentPeriod)
      .map(s => ({ ...s, companyName: db.companies.get(s.companyId)?.name || s.companyId }));
    setSubmissions(subs);
  }, [db, currentPeriod]);
  
  // --- Lógica del Checklist ---
  const handleStartReview = (sub) => {
    setFieldObservations(sub.production.observations || {});
    setReviewingSubmission(sub);
  };

  const handleCloseReview = () => {
    setReviewingSubmission(null);
    setFieldObservations({});
    setObservingField(null);
  };

  const handleToggleObservation = (fieldKey) => {
    // Si ya está observando este campo, ciérrelo
    if (observingField === fieldKey) {
      setObservingField(null);
    } else {
      // Si no, ábralo
      setObservingField(fieldKey);
    }
  };

  const handleObservationChange = (fieldKey, text) => {
    setFieldObservations(prev => {
      const newObs = { ...prev };
      if (text) {
        newObs[fieldKey] = text;
      } else {
        delete newObs[fieldKey]; // Eliminar si el texto está vacío
      }
      return newObs;
    });
  };

  const handleApproveAll = () => {
    if (!reviewingSubmission) return;
    updateSubmission('production', 'approved', reviewingSubmission.production.data, reviewingSubmission.companyId, {});
    createNotification(reviewingSubmission.companyUserEmail, `¡Su envío de ${reviewingSubmission.period} ha sido APROBADO!`);
    handleCloseReview();
  };

  const handleSubmitObservations = () => {
    if (!reviewingSubmission) return;
    updateSubmission('production', 'observed', reviewingSubmission.production.data, reviewingSubmission.companyId, fieldObservations);
    createNotification(reviewingSubmission.companyUserEmail, `Su envío de ${reviewingSubmission.period} tiene ${Object.keys(fieldObservations).length} observación(es).`);
    handleCloseReview();
  };

  const coverage = useMemo(() => {
    const totalCompanies = db.companies.size;
    if (totalCompanies === 0) return 0;
    const submittedOrApproved = submissions.filter(s => s.production.status === 'submitted' || s.production.status === 'approved').length;
    return (submittedOrApproved / totalCompanies) * 100;
  }, [submissions, db.companies]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Log de Envíos - {currentPeriod}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-sm max-w-sm">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Cobertura de Envíos</h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 36 36" className="transform -rotate-90">
              <circle cx="18" cy="18" r="15.9155" className="stroke-current text-slate-200" strokeWidth="4" fill="transparent" />
              <circle cx="18" cy="18" r="15.9155" className="stroke-current text-indigo-600" strokeWidth="4" fill="transparent" strokeDasharray={`${coverage} 100`} strokeDashoffset="0" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-indigo-700">{coverage.toFixed(0)}%</span>
            </div>
          </div>
          <div className="text-slate-600">
            <span className="font-bold text-lg">{submissions.filter(s => s.production.status === 'submitted' || s.production.status === 'approved').length}</span> de <span className="font-bold text-lg">{db.companies.size}</span>
            <span className="block text-sm">industrias han enviado.</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Industria</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Estado Producción</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {submissions.map(sub => (
              <tr key={sub.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{sub.companyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={sub.production.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {/* --- ¡NUEVO! Botón "Revisar" --- */}
                  {(sub.production.status === 'submitted' || sub.production.status === 'observed') && (
                    <button 
                      onClick={() => handleStartReview(sub)}
                      className="font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      Revisar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- ¡NUEVO! Modal de Checklist del Admin --- */}
      {reviewingSubmission && (
        <AdminReviewChecklistModal
          isOpen={!!reviewingSubmission}
          onClose={handleCloseReview}
          submission={reviewingSubmission}
          onApproveAll={handleApproveAll}
          onSubmitObservations={handleSubmitObservations}
          fieldObservations={fieldObservations}
          onObservationChange={handleObservationChange}
          observingField={observingField}
          onToggleObservation={handleToggleObservation}
        />
      )}
    </div>
  );
};

// --- ¡NUEVO! Modal de Checklist del Administrador ---
const AdminReviewChecklistModal = ({ 
  isOpen, onClose, submission, onApproveAll, onSubmitObservations,
  fieldObservations, onObservationChange, observingField, onToggleObservation
}) => {
  if (!isOpen) return null;

  const data = submission.production.data;
  
  // Mapear los campos a un formato iterable para el checklist
  const fields = [
    { key: 'volCentros', label: 'Vol. Centros Acopio', value: `${data.volCentros} ${data.unitCentros}` },
    { key: 'volGanaderos', label: 'Vol. Ganaderos', value: `${data.volGanaderos} ${data.unitGanaderos}` },
    { key: 'precioCentros', label: 'Precio Centros', value: `$${data.precioCentros}` },
    { key: 'precioGanaderos', label: 'Precio Ganaderos', value: `$${data.precioGanaderos}` },
    // Aplanar los objetos de composición
    ...Object.keys(data.compGanaderos).map(k => ({ key: `compGanaderos_${k}`, label: `Gan. ${k.replace('_', ' ')}`, value: data.compGanaderos[k] })),
    ...Object.keys(data.compCentros).map(k => ({ key: `compCentros_${k}`, label: `C.A. ${k.replace('_', ' ')}`, value: data.compCentros[k] })),
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4 flex-shrink-0">
          <h3 className="text-xl font-semibold text-slate-900">
            Revisión de Envío: {submission.companyName}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 flex-shrink-0">
          Revise cada indicador. Puede aprobar todos o marcar campos individuales para observar.
        </p>
        
        <div className="space-y-2 overflow-y-auto pr-2">
          {fields.map(({ key, label, value }) => (
            <div key={key} className="p-3 bg-slate-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-medium text-slate-500 capitalize">{label}</div>
                  <div className="text-sm font-semibold text-slate-900">{value || '-'}</div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => onToggleObservation(key)}
                    className={`p-1 rounded-full ${fieldObservations[key] ? 'bg-yellow-500 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}
                  >
                    <AlertTriangle size={18} />
                  </button>
                </div>
              </div>
              {/* --- Mini-input para la observación --- */}
              {observingField === key && (
                <div className="mt-2">
                  <input
                    type="text"
                    className="w-full text-sm p-2 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Escriba la observación..."
                    value={fieldObservations[key] || ''}
                    onChange={(e) => onObservationChange(key, e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 flex-shrink-0">
          <button
            onClick={onApproveAll}
            className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700"
          >
            Aprobar Envío
          </button>
          <button
            onClick={onSubmitObservations}
            disabled={Object.keys(fieldObservations).length === 0}
            className="px-4 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-md shadow-sm hover:bg-yellow-700 disabled:opacity-50"
          >
            Enviar {Object.keys(fieldObservations).length} Observación(es)
          </button>
        </div>
      </div>
    </div>
  );
};


const StatusBadge = ({ status }) => {
  const config = {
    draft: { text: 'Borrador', classes: 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200' },
    submitted: { text: 'En Revisión', classes: 'bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-200' }, // <-- CAMBIO DE TEXTO
    observed: { text: 'Observado', classes: 'bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-300' },
    approved: { text: 'Aprobado', classes: 'bg-green-100 text-green-700 ring-1 ring-inset ring-green-200' },
  }[status] || { text: 'N/A', classes: 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200' };

  return (
    <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${config.classes}`}>
      {config.text}
    </span>
  );
};

// --- ¡NUEVA! Vista de Gestión de Industrias ---
const IndustryManagement = () => {
  const { db, addCompany, addUser } = useAppContext();
  const [modalView, setModalView] = useState(null); // null | 'addIndustry' | 'manageUsers'
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = Array.from(db.companies.values());
  
  const handleOpenAddIndustry = () => {
    setModalView('addIndustry');
  };

  const handleOpenManageUsers = (industry) => {
    setSelectedIndustry(industry);
    setModalView('manageUsers');
  };
  
  const handleCloseModals = () => {
    setModalView(null);
    setSelectedIndustry(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Gestión de Industrias y Usuarios
        </h1>
        <button
          onClick={handleOpenAddIndustry}
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
        >
          Agregar Nueva Industria
        </button>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Nombre</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">ID Interno</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">RUC</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {industries.map(industry => (
              <tr key={industry.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{industry.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{industry.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{industry.ruc}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleOpenManageUsers(industry)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Gestionar Usuarios
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {modalView === 'addIndustry' && (
        <AddIndustryModal
          isOpen={true}
          onClose={handleCloseModals}
          onAdd={addCompany}
        />
      )}
      
      {modalView === 'manageUsers' && (
        <ManageUsersModal
          isOpen={true}
          onClose={handleCloseModals}
          industry={selectedIndustry}
          users={Array.from(db.users.values())}
          onAddUser={addUser}
        />
      )}
    </div>
  );
};

// --- ¡NUEVO! Modal para Añadir Industria ---
const AddIndustryModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [ruc, setRuc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ruc) return;
    onAdd(name, ruc);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Agregar Nueva Industria
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <SimpleInputWithUnit label="Nombre de la Industria" name="name" value={name} onChange={(e) => setName(e.target.value)} unit={<Building size={16} />} />
          <SimpleInputWithUnit label="RUC" name="ruc" value={ruc} onChange={(e) => setRuc(e.target.value)} unit="RUC" />
          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700">
              Agregar Industria
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- ¡NUEVO! Modal para Gestionar Usuarios ---
const ManageUsersModal = ({ isOpen, onClose, industry, users, onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const industryUsers = users.filter(u => u.companyId === industry.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    onAddUser(name, email, password, industry.id);
    // Reset fields
    setName(''); setEmail(''); setPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
          <h3 className="text-xl font-semibold text-slate-900">
            Gestionar Usuarios de: {industry.name}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>
        
        {/* Lista de usuarios existentes */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 mb-2">Usuarios Actuales</h4>
          <div className="space-y-2">
            {industryUsers.length > 0 ? industryUsers.map(user => (
              <div key={user.email} className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
                <span className="text-sm font-medium text-slate-800">{user.name}</span>
                <span className="text-sm text-slate-500">{user.email}</span>
              </div>
            )) : (
              <p className="text-sm text-slate-500 italic">Esta industria aún no tiene usuarios.</p>
            )}
          </div>
        </div>
        
        {/* Formulario para añadir nuevo usuario */}
        <form onSubmit={handleSubmit} className="space-y-4 border-t border-slate-200 pt-6">
          <h4 className="text-md font-semibold text-slate-700">Añadir Nuevo Usuario</h4>
          <SimpleInputWithUnit label="Nombre Completo" name="name" value={name} onChange={(e) => setName(e.target.value)} unit={<Users size={16} />} />
          <SimpleInputWithUnit label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} unit="@" />
          <SimpleInputWithUnit label="Contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)} unit={<LogOut size={16} />} />
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md shadow-sm hover:bg-slate-50">
              Cerrar
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700">
              Añadir Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


// --- 3. PANTALLA DE LOGIN (ACTUALIZADA) ---
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = onLogin(email, password);
    if (!success) {
      setError('Credenciales inválidas. Intente de nuevo.');
    }
  };

  const handlePublicAccess = () => {
    onLogin(null, null, 'public');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-inter p-4">
      {/* TARJETA CON ACENTO DE COLOR */}
      <div className="relative max-w-md w-full bg-white pt-12 p-8 rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-indigo-600" />
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Observatorio Lácteo</h1>
          <h2 className="text-lg text-slate-600">Bienvenido</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="usuario@ole.ec"
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-slate-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">o</span>
          </div>
        </div>

        <button
          onClick={handlePublicAccess}
          className="w-full py-2 px-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-md shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ingresar como Público
        </button>
      </div>
    </div>
  );
};

// --- 4. LÓGICA DE CONTEXTO Y APP PRINCIPAL ---

const AppContext = createContext(null);

// Cargar datos históricos desde el JSON proporcionado
const produccionHistorica = [
  { "Empresa": "Alpina S.A.", "Año": 2023, "Mes": 1, "volumen_total": 3934287.0, "volumen_centros": null, "volumen_ganadero": null, "total_grasa": 3.88, "total_solidos_totales": 12.22, "total_solidos_no_grasos": 8.34, "total_proteina": 3.54, "total_ufc": 742033.8983050848, "precio_total": 0.492193299573722 },
  { "Empresa": "Alpina S.A.", "Año": 2023, "Mes": 2, "volumen_total": 3490191.0, "volumen_centros": null, "volumen_ganadero": null, "total_grasa": 3.81, "total_solidos_totales": 12.14, "total_solidos_no_grasos": 8.33, "total_proteina": 3.16, "total_ufc": 750373.6263736264, "precio_total": 0.4869913308469364 },
  { "Empresa": "Alpina S.A.", "Año": 2025, "Mes": 7, "volumen_total": 337625.0, "volumen_centros": 217621.0, "volumen_ganadero": 120004.0, "total_grasa": 3.7884, "total_solidos_totales": 12.1424, "total_solidos_no_grasos": 8.3616, "total_proteina": 3.1413, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1386905.0, "total_cbt": null, "total_css": 417631.0, "gan_grasa": 3.8375, "gan_solidos_totales": 12.25, "gan_solidos_no_grasos": 8.4228, "gan_proteina": 3.1781, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": 394398.0, "gan_cbt": null, "gan_css": 442690.0, "ca_grasa": 3.6982, "ca_solidos_totales": 11.9464, "ca_solidos_no_grasos": 8.2507, "ca_proteina": 3.0752, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": 1489568.0, "ca_cbt": null, "ca_css": 400302.0, "precio_total": 0.526, "precio_centro": 0.5413, "precio_ganadero": 0.5188 },
  { "Empresa": "Alpina S.A.", "Año": 2025, "Mes": 8, "volumen_total": null, "volumen_centros": null, "volumen_ganadero": null, "total_grasa": 3.7557, "total_solidos_totales": 12.1356, "total_solidos_no_grasos": 8.3842, "total_proteina": 3.158, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1323810.0, "total_cbt": null, "total_css": 424313.0, "gan_grasa": 3.7097, "gan_solidos_totales": 12.0497, "gan_solidos_no_grasos": 8.3391, "gan_proteina": 3.0865, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": 1456622.0, "gan_cbt": null, "gan_css": 449393.0, "ca_grasa": 3.8375, "ca_solidos_totales": 12.186, "ca_solidos_no_grasos": 8.4109, "ca_proteina": 3.2004, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": 454180.0, "ca_cbt": null, "ca_css": 405165.0, "precio_total": 0.5192, "precio_centro": 0.5241, "precio_ganadero": 0.5161 },
  { "Empresa": "TONI S.A.", "Año": 2025, "Mes": 7, "volumen_total": 9400000.0, "volumen_centros": 6000000.0, "volumen_ganadero": 3400000.0, "total_grasa": 3.84, "total_solidos_totales": 12.06, "total_solidos_no_grasos": 8.22, "total_proteina": 3.24, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 520000.0, "gan_grasa": 3.88, "gan_solidos_totales": 12.16, "gan_solidos_no_grasos": 8.28, "gan_proteina": 3.28, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 550000.0, "ca_grasa": 3.82, "ca_solidos_totales": 12.04, "ca_solidos_no_grasos": 8.22, "ca_proteina": 3.22, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.5427659574468085, "precio_centro": 0.55, "precio_ganadero": 0.53 },
  { "Empresa": "TONI S.A.", "Año": 2025, "Mes": 8, "volumen_total": 9500000.0, "volumen_centros": 6500000.0, "volumen_ganadero": 3000000.0, "total_grasa": 3.92, "total_solidos_totales": 12.1, "total_solidos_no_grasos": 8.18, "total_proteina": 3.26, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 509000.0, "gan_grasa": 4.0, "gan_solidos_totales": 12.28, "gan_solidos_no_grasos": 8.28, "gan_proteina": 3.28, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 525000.0, "ca_grasa": 3.88, "ca_solidos_totales": 12.03, "ca_solidos_no_grasos": 8.15, "ca_proteina": 3.25, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.5436842105263158, "precio_centro": 0.55, "precio_ganadero": 0.53 },
  { "Empresa": "Nestlé", "Año": 2025, "Mes": 7, "volumen_total": 7200000.0, "volumen_centros": 6000000.0, "volumen_ganadero": 1200000.0, "total_grasa": 3.85, "total_solidos_totales": 12.05, "total_solidos_no_grasos": 8.2, "total_proteina": 3.2, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 510000.0, "gan_grasa": 3.85, "gan_solidos_totales": 12.05, "gan_solidos_no_grasos": 8.2, "gan_proteina": 3.2, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 550000.0, "ca_grasa": 3.85, "ca_solidos_totales": 12.05, "ca_solidos_no_grasos": 8.2, "ca_proteina": 3.2, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.545, "precio_centro": 0.548, "precio_ganadero": 0.53 },
  { "Empresa": "Nestlé", "Año": 2025, "Mes": 8, "volumen_total": 7800000.0, "volumen_centros": 6500000.0, "volumen_ganadero": 1300000.0, "total_grasa": 3.92, "total_solidos_totales": 12.12, "total_solidos_no_grasos": 8.2, "total_proteina": 3.2, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 505000.0, "gan_grasa": 4.0, "gan_solidos_totales": 12.2, "gan_solidos_no_grasos": 8.2, "gan_proteina": 3.2, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 520000.0, "ca_grasa": 3.9, "ca_solidos_totales": 12.1, "ca_solidos_no_grasos": 8.2, "ca_proteina": 3.2, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.5383333333333333, "precio_centro": 0.54, "precio_ganadero": 0.53 },
  { "Empresa": "Indulac", "Año": 2025, "Mes": 7, "volumen_total": 5300000.0, "volumen_centros": 1800000.0, "volumen_ganadero": 3500000.0, "total_grasa": 3.83, "total_solidos_totales": 12.03, "total_solidos_no_grasos": 8.2, "total_proteina": 3.2, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 560000.0, "gan_grasa": 3.85, "gan_solidos_totales": 12.05, "gan_solidos_no_grasos": 8.2, "gan_proteina": 3.2, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 600000.0, "ca_grasa": 3.8, "ca_solidos_totales": 12.0, "ca_solidos_no_grasos": 8.2, "ca_proteina": 3.2, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.5367924528301887, "precio_centro": 0.55, "precio_ganadero": 0.53 },
  { "Empresa": "Indulac", "Año": 2025, "Mes": 8, "volumen_total": 5100000.0, "volumen_centros": 2000000.0, "volumen_ganadero": 3100000.0, "total_grasa": 3.93, "total_solidos_totales": 12.13, "total_solidos_no_grasos": 8.2, "total_proteina": 3.2, "total_proteina_cruda": null, "total_proteina_verdadera": null, "total_ufc": 1500000.0, "total_cbt": null, "total_css": 550000.0, "gan_grasa": 3.95, "gan_solidos_totales": 12.15, "gan_solidos_no_grasos": 8.2, "gan_proteina": 3.2, "gan_proteina_cruda": null, "gan_proteina_verdadera": null, "gan_ufc": null, "gan_cbt": 1500000.0, "gan_css": 580000.0, "ca_grasa": 3.9, "ca_solidos_totales": 12.1, "ca_solidos_no_grasos": 8.2, "ca_proteina": 3.2, "ca_proteina_cruda": null, "ca_proteina_verdadera": null, "ca_ufc": null, "ca_cbt": 1500000.0, "ca_css": 500000.0, "precio_total": 0.537843137254902, "precio_centro": 0.55, "precio_ganadero": 0.53 }
]

// Simulación de Base de Datos y Carga Inicial (ACTUALIZADA)
const seedDatabase = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = new Map();
      const companies = new Map();
      const submissions = new Map();
      const emdiResponses = new Map();
      const emdiQuestions = new Map();
      const notifications = new Map(); // <-- ¡NUEVO!

      // 1. Cargar Compañías
      companies.set('alpina', { id: 'alpina', name: 'Alpina S.A.', ruc: '1790000000001' });
      companies.set('toni', { id: 'toni', name: 'TONI S.A.', ruc: '1790000000002' });
      companies.set('nestle', { id: 'nestle', name: 'Nestlé S.A.', ruc: '1790000000003' });
      companies.set('indulac', { id: 'indulac', name: 'Indulac S.A.', ruc: '1790000000004' });

      // 2. Cargar Usuarios
      users.set('admin@ole.ec', { email: 'admin@ole.ec', password: '123', role: 'observatory', name: 'Administrador' });
      users.set('alpina@ole.ec', { email: 'alpina@ole.ec', password: '123', role: 'industry', companyId: 'alpina', name: 'Usuario Alpina' });
      users.set('toni@ole.ec', { email: 'toni@ole.ec', password: '123', role: 'industry', companyId: 'toni', name: 'Usuario Toni' });
      users.set('nestle@ole.ec', { email: 'nestle@ole.ec', password: '123', role: 'industry', companyId: 'nestle', name: 'Usuario Nestlé' });
      users.set('indulac@ole.ec', { email: 'indulac@ole.ec', password: '123', role: 'industry', companyId: 'indulac', name: 'Usuario Indulac' });

      // 3. Cargar Envíos Históricos (del JSON)
      const companyIdMap = { "Alpina S.A.": "alpina", "TONI S.A.": "toni", "Nestlé": "nestle", "Indulac": "indulac" };
      
      produccionHistorica.forEach(entry => {
        const companyId = companyIdMap[entry.Empresa];
        if (!companyId || entry.Año !== 2025) return; 

        const year = entry.Año;
        const month = String(entry.Mes).padStart(2, '0');
        const period = `${year}-${month}`;
        
        const volCentros = entry.volumen_centros || '';
        const volGanaderos = entry.volumen_ganadero || '';
        const precioCentros = entry.precio_centro || '';
        const precioGanaderos = entry.precio_ganadero || '';
        const volCentrosLitros = normalizeToLitros(String(volCentros), 'litros');
        const volGanaderosLitros = normalizeToLitros(String(volGanaderos), 'litros');
        const volTotal = volCentrosLitros + volGanaderosLitros;
        
        let precioPromedio = 0;
        if (volTotal > 0 && precioCentros && precioGanaderos) {
           precioPromedio = ((parseFloat(precioCentros) || 0) * volCentrosLitros + (parseFloat(precioGanaderos) || 0) * volGanaderosLitros) / volTotal;
        } else if (entry.precio_total) {
            precioPromedio = entry.precio_total;
        }

        // Mapeo de datos (ACTUALIZADO para quitar CBT)
        const productionData = {
          volCentros: String(volCentros), unitCentros: 'litros',
          volGanaderos: String(volGanaderos), unitGanaderos: 'litros',
          volTotal: volTotal,
          precioCentros: String(precioCentros), precioGanaderos: String(precioGanaderos),
          precioPromedio: precioPromedio,
          // Ganaderos
          compGanaderos: {
            grasa: String(entry.gan_grasa || ''), 
            proteina: String(entry.gan_proteina || ''),
            solidos_totales: String(entry.gan_solidos_totales || ''),
            solidos_no_grasos: String(entry.gan_solidos_no_grasos || ''),
            proteina_cruda: String(entry.gan_proteina_cruda || ''),
            proteina_verdadera: String(entry.gan_proteina_verdadera || ''),
            ccs: String(entry.gan_css || ''), 
            ufc: String(entry.gan_ufc || ''),
          },
          // Centros
          compCentros: {
            grasa: String(entry.ca_grasa || ''), 
            proteina: String(entry.ca_proteina || ''),
            solidos_totales: String(entry.ca_solidos_totales || ''),
            solidos_no_grasos: String(entry.ca_solidos_no_grasos || ''),
            proteina_cruda: String(entry.ca_proteina_cruda || ''),
            proteina_verdadera: String(entry.ca_proteina_verdadera || ''),
            ccs: String(entry.ca_css || ''), 
            ufc: String(entry.ca_ufc || ''),
          },
          // Totales (cargados desde el JSON para el historial)
          total_grasa: entry.total_grasa || 0,
          total_solidos_totales: entry.total_solidos_totales || 0,
          total_solidos_no_grasos: entry.total_solidos_no_grasos || 0,
          total_proteina: entry.total_proteina || 0,
          total_proteina_cruda: entry.total_proteina_cruda || 0,
          total_proteina_verdadera: entry.total_proteina_verdadera || 0,
          total_ufc: entry.total_ufc || 0,
          total_css: entry.total_css || 0,
        };

        const submissionId = `${companyId}-${period}`;
        submissions.set(submissionId, {
          id: submissionId, 
          companyId: companyId, 
          companyUserEmail: `${companyId}@ole.ec`, // ¡NUEVO!
          period: period,
          production: { status: 'approved', data: productionData, observations: {} }, // ¡NUEVO! observations
          emdi: { status: 'approved', data: {}, observations: {} }
        });
      });

      // 4. Cargar Período Actual (Octubre 2025)
      const currentPeriod = '2025-10';
      // Objeto de datos por defecto (ACTUALIZADO para quitar CBT)
      const defaultData = {
        volCentros: '', unitCentros: 'litros', volGanaderos: '', unitGanaderos: 'litros', volTotal: 0,
        precioCentros: '', precioGanaderos: '', precioPromedio: 0,
        compGanaderos: { 
          grasa: '', proteina: '', ccs: '', ufc: '', 
          solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: ''
        },
        compCentros: { 
          grasa: '', proteina: '', ccs: '', ufc: '',
          solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: ''
        },
        total_grasa: 0, total_solidos_totales: 0, total_solidos_no_grasos: 0,
        total_proteina: 0, total_proteina_cruda: 0, total_proteina_verdadera: 0,
        total_ufc: 0, total_css: 0,
      };

      companies.forEach(company => {
        const subId = `${company.id}-${currentPeriod}`;
        if (!submissions.has(subId)) {
            let status = 'draft', data = defaultData, observations = {};
            let companyUserEmail = `${company.id}@ole.ec`;
            
            if (company.id === 'alpina') {
                status = 'submitted'; 
                data = { ...defaultData, volTotal: 350000, volCentros: '350', unitCentros: 'miles_litros' };
            } else if (company.id === 'nestle') {
                status = 'observed'; 
                data = { ...defaultData, volCentros: '1000', unitCentros: 'miles_litros', volTotal: 1000000 };
                observations = { 'volCentros': 'El volumen total parece bajo. Favor revisar.' };
            } else if (company.id === 'indulac') {
                status = 'approved'; 
                data = { ...defaultData, volTotal: 280000, volCentros: '280', unitCentros: 'miles_litros' };
            }
            // Toni se queda como 'draft'
            
            submissions.set(subId, {
                id: subId, companyId: company.id, period: currentPeriod, companyUserEmail: companyUserEmail,
                production: { status: status, data: data, observations: observations },
                emdi: { status: status, data: {}, observations: {} }
            });
        }
      });
      
      // 5. Cargar Notificaciones de ejemplo
      notifications.set('notif1', { id: 'notif1', userId: 'nestle@ole.ec', text: 'Su envío de 2025-10 tiene 1 observación.', read: false, createdAt: new Date() });
      notifications.set('notif2', { id: 'notif2', userId: 'admin@ole.ec', text: 'Alpina S.A. ha enviado su reporte de 2025-10.', read: false, createdAt: new Date() });
      notifications.set('notif3', { id: 'notif3', userId: 'indulac@ole.ec', text: '¡Su envío de 2025-10 ha sido APROBADO!', read: true, createdAt: new Date(Date.now() - 3600000) }); // hace 1 hora


      // 6. Cargar Respuestas y Preguntas EMDI
      emdiQuestions.set('q1', 'Percepción de ventas del sector');
      emdiQuestions.set('q2', 'Percepción demanda canal TRADICIONAL');
      emdiQuestions.set('q3', 'Percepción demanda canal MODERNO');
      emdiQuestions.set('q4', 'Disponibilidad de leche cruda');
      emdiQuestions.set('q5', 'Dificultades para abastecerse');
      emdiQuestions.set('q6', 'Evolución de costos clave');
      emdiQuestions.set('q7', 'Condiciones de calidad de la leche');
      emdiQuestions.set('q8', 'Expectativa de ventas (volumen)');
      emdiQuestions.set('q9', 'Expectativa de ventas (dólares)');
      emdiQuestions.set('q10', 'Expectativa de condiciones de calidad');
      emdiQuestions.set('q11', 'Riesgos vs Oportunidades');

      emdiResponses.set('resp1', { id: 'resp1', data: { q1: 'Similar (±1%)', q2: 'En caída', q3: 'En crecimiento', q4: 'Justa', q5: 'Baja', q6: 'Logística,Insumos,Leche cruda,Energía,Se mantuvieron', q7: 'Se mantuvieron', q8: 'Caerá 1–5%', q9: 'Similar (±1%)', q10: 'Se mantendrán', q11: 'No ha cambiado' }});
      emdiResponses.set('resp2', { id: 'resp2', data: { q1: 'Similar (±1%)', q2: 'Estable', q3: 'Estable', q4: 'Escasa', q5: 'Alta', q6: 'Leche cruda,Energía,Logística,Insumos,Subieron', q7: 'Se mantuvieron', q8: 'Subirá 1–5%', q9: 'Subirá 1–5%', q10: 'Se mantendrán', q11: 'Más riesgos' }});
      emdiResponses.set('resp3', { id: 'resp3', data: { q1: 'Caída moderada (1–5%)', q2: 'En caída', q3: 'En caída', q4: 'Justa', q5: 'Ninguna', q6: 'Leche cruda,Energía,Insumos,Logística,Se mantuvieron', q7: 'Se mantuvieron', q8: 'Caerá 1–5%', q9: 'Caerá 1–5%', q10: 'Se mantendrán', q11: 'Más riesgos' }});

      resolve({ users, companies, submissions, emdiResponses, emdiQuestions, notifications });
    }, 1500); // Simular 1.5s de carga
  });
};


// Componente principal de la App
function App() {
  const [db, setDb] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const currentPeriod = '2025-10'; // Período abierto

  useEffect(() => {
    seedDatabase().then((data) => {
      setDb(data);
      setLoading(false);
    });
  }, []);

  const handleLogin = (email, password, role) => {
    if (role === 'public') {
      setUser({ role: 'public' });
      return true;
    }
    const foundUser = db.users.get(email);
    if (foundUser && foundUser.password === password) {
      if (foundUser.role === 'industry') {
        const company = db.companies.get(foundUser.companyId);
        setUser({ ...foundUser, company });
      } else {
        setUser(foundUser);
      }
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
  };
  
  // --- ¡NUEVAS FUNCIONES DE NOTIFICACIÓN Y GESTIÓN! ---
  const createNotification = (userId, text) => {
    setDb(prevDb => {
      const newNotifications = new Map(prevDb.notifications);
      const newId = `notif_${newNotifications.size + 1}_${Date.now()}`;
      newNotifications.set(newId, { id: newId, userId, text, read: false, createdAt: new Date() });
      return { ...prevDb, notifications: newNotifications };
    });
  };

  const markNotificationsRead = () => {
    setDb(prevDb => {
      const newNotifications = new Map(prevDb.notifications);
      newNotifications.forEach(notif => {
        if (notif.userId === user.email && !notif.read) {
          notif.read = true;
        }
      });
      return { ...prevDb, notifications: newNotifications };
    });
  };
  
  const addCompany = (name, ruc) => {
    setDb(prevDb => {
      const newCompanies = new Map(prevDb.companies);
      const newSubmissions = new Map(prevDb.submissions);
      
      const companyId = name.toLowerCase().replace(/\s/g, '').substring(0, 6); // ej: alpina
      const newCompany = { id: companyId, name, ruc };
      
      newCompanies.set(companyId, newCompany);
      
      // Crear un envío en borrador para el período actual
      const subId = `${companyId}-${currentPeriod}`;
      // (Usar la estructura de defaultData)
      const defaultData = {
        volCentros: '', unitCentros: 'litros', volGanaderos: '', unitGanaderos: 'litros', volTotal: 0,
        precioCentros: '', precioGanaderos: '', precioPromedio: 0,
        compGanaderos: { grasa: '', proteina: '', ccs: '', ufc: '', solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: '' },
        compCentros: { grasa: '', proteina: '', ccs: '', ufc: '', solidos_totales: '', solidos_no_grasos: '', proteina_cruda: '', proteina_verdadera: '' },
        total_grasa: 0, total_solidos_totales: 0, total_solidos_no_grasos: 0, total_proteina: 0, total_proteina_cruda: 0, total_proteina_verdadera: 0, total_ufc: 0, total_css: 0,
      };
      newSubmissions.set(subId, {
        id: subId, companyId: companyId, period: currentPeriod, companyUserEmail: null, // Aún no hay usuario
        production: { status: 'draft', data: defaultData, observations: {} },
        emdi: { status: 'draft', data: {}, observations: {} }
      });
      
      return { ...prevDb, companies: newCompanies, submissions: newSubmissions };
    });
  };
  
  const addUser = (name, email, password, companyId) => {
    setDb(prevDb => {
      const newUsers = new Map(prevDb.users);
      // Validar si el email ya existe
      if (newUsers.has(email)) {
        console.error("El email ya existe");
        return prevDb; // No hacer nada
      }
      
      const newUser = { email, password, name, role: 'industry', companyId };
      newUsers.set(email, newUser);
      
      // Actualizar el 'companyUserEmail' en el envío actual si es el primer usuario
      const newSubmissions = new Map(prevDb.submissions);
      const subId = `${companyId}-${currentPeriod}`;
      const currentSub = newSubmissions.get(subId);
      if (currentSub && !currentSub.companyUserEmail) {
        currentSub.companyUserEmail = email;
        newSubmissions.set(subId, currentSub);
      }
      
      return { ...prevDb, users: newUsers, submissions: newSubmissions };
    });
  };
  // --- FIN DE NUEVAS FUNCIONES ---

  const updateSubmission = (type, status, data, companyId = null, observations = {}) => { // <-- OBSERVATIONS AHORA ES UN OBJETO
    const targetCompanyId = user.role === 'observatory' ? companyId : user.companyId;
    if (!targetCompanyId) return;

    const subId = `${targetCompanyId}-${currentPeriod}`;
    
    setDb(prevDb => {
      const newSubmissions = new Map(prevDb.submissions);
      const currentSub = newSubmissions.get(subId);
      if (currentSub) {
        const updatedSub = { ...currentSub };
        if (type === 'production') {
          updatedSub.production = {
            status: status,
            data: data,
            observations: observations // <-- ¡NUEVO! Guardar el objeto de observaciones
          };
        }
        newSubmissions.set(subId, updatedSub);
      }
      return { ...prevDb, submissions: newSubmissions };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">OLE</h1>
          <p className="text-slate-600">Cargando base de datos...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const contextValue = {
    user,
    db,
    currentPeriod,
    logout: handleLogout,
    updateSubmission,
    createNotification,     
    markNotificationsRead,
    addCompany,
    addUser
  };

  return (
    <AppContext.Provider value={contextValue}>
      {user.role === 'public' && <PublicLayout><PublicDashboard /></PublicLayout>}
      {user.role === 'industry' && <IndustryLayout />}
      {user.role === 'observatory' && <ObservatoryLayout />}
    </AppContext.Provider>
  );
}

// Hook para usar el contexto
export const useAppContext = () => {
  return useContext(AppContext);
};

export default App;