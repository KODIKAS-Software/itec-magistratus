
import illustration from "./illustration.svg";
import logo from "./logo.png";

export function Welcome() {
  return (
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <main className="container mx-auto flex-grow flex flex-col items-center justify-center px-4 py-8">
          <div
              className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">


            <div className="p-6 ">
              <div className="flex flex-col gap-6 items-center">
                <div className="w-full flex justify-center">
                    <img
                        src={logo}
                        alt="React Router"
                        className="block w-1/3"
                    />
                </div>
                <div className="w-full">
                    <div className="p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-[#8B2703] text-center">Estamos mejorando para ti</h3>
                        <p className="text-base font-semibold text-gray-600 mt-2 text-center">
                            Pronto tendremos un nuevo sitio con mejor experiencia para nuestros estudiantes y
                            visitantes.
                        </p>
                        <div className="mt-6">
                            <div className="flex items-center justify-center gap-2 text-[#8B2703]">
                                <p className="font-medium">Lanzamiento próximo</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
                {/* Illustration */}
                <div className="w-full flex justify-center">
                    <div className="relative w-full max-w-md ">
                        <img
                            src={illustration}
                            alt="React Router"
                      className="block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#8B2703] text-white py-4">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} ITEC Magistratus • Escuela de Negocios</p>
          </div>
        </footer>
      </div>
);
}


