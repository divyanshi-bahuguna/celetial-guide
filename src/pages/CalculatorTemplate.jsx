import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

const CalculatorTemplate = ({ title, description, fields, onSubmit, loading, result }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    const data = {};
    fields?.forEach((f) => {
      data[f.name] = e.target[f.name].value;
    });

    onSubmit(data); // <- parent handles async, returns result
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          {fields?.map((f) => (
            <div key={f.name} className="flex flex-col">
              <label className="mb-1 font-medium text-foreground">{f.label}</label>
              <input
                name={f.name}
                type={f.type || "text"}
                placeholder={f.placeholder}
                className="border border-muted rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className={`bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition`}
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>
        </form>

        {result && (
          <Card className="mt-6 max-w-md bg-card">
            <CardContent>
              <p className="text-foreground font-medium">{result}</p>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CalculatorTemplate;
