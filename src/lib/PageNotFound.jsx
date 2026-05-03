import { useLocation, Link } from 'react-router-dom';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-heading font-light text-muted">404</h1>
                        <div className="h-0.5 w-16 bg-primary/20 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading font-medium text-foreground">
                            Страницата не е намерена
                        </h2>
                        <p className="text-muted-foreground font-body leading-relaxed">
                            Страницата <span className="font-medium text-foreground">"{pageName}"</span> не съществува или е била преместена.
                        </p>
                    </div>
                    
                    <div className="pt-6">
                        <Link 
                            to="/" 
                            className="inline-flex items-center px-6 py-2.5 text-sm font-body font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Към началната страница
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
