import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2 } from "lucide-react";
import axios from "axios";


// const LoginPage = ({ onLogin }) => {
  const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({}); // Reset les erreurs

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        formData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.ConnectedUser));
        window.location.href = "/respoHomePage"; // Redirection après connexion
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Une erreur s'est produite.";
      setErrors({ global: message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Effacer l'erreur quand l'utilisateur tape
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900">Connexion</h1>
            <p className="text-slate-600 mt-2">
              Bienvenue ! Connectez-vous à votre compte.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.global && (
              <p className="text-red-500 text-sm">{errors.global}</p>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                <span className="text-sm text-slate-600">
                  Se souvenir de moi
                </span>
              </label>
              <a
                href="/"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
            
          </form>
        </div>
      </div>
    </div>
  );
};
LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
