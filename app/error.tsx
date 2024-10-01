'use client';

type ErrorProps = {
    error: Error;
    reset: () => void;
};

const ErrorPage: React.FC<ErrorProps> = (ErrorProps) => {
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{ErrorProps.error.message}</p>
            <button onClick={ErrorProps.reset}>Try Again</button>
        </div>
    );
};

export default ErrorPage;