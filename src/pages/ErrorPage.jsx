import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  const throwError = () => {
    throw new Error("This is a test error");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={throwError} className="mx-auto object-cover">
        Throw Error
      </Button>
    </div>
  );
};

export default ErrorPage;