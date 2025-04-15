export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-white">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
            Back to Homepage
        </a>
        </div>
    );
    }
  