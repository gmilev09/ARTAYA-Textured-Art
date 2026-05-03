import React from 'react';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-lg shadow-lg border border-border">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-heading font-semibold text-foreground mb-4">Достъпът е ограничен</h1>
          <p className="text-muted-foreground mb-8 font-body">
            Нямате необходимите права за достъп до тази страница. Моля, свържете се с администратор или влезте с подходящ профил.
          </p>
          <div className="p-4 bg-secondary rounded-md text-sm text-muted-foreground font-body text-left">
            <p>Възможни стъпки:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Проверете дали сте влезли с правилния акаунт</li>
              <li>Свържете се с екипа за поддръжка</li>
              <li>Излезте от профила си и опитайте да влезете отново</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
