import { LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import PropTypes from 'prop-types';

const Navbar = ({ username, onLogout }) => {
  return (
    <nav className="h-16 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <User className="h-5 w-5 text-slate-500" />
        <span className="font-medium text-slate-700">{username}</span>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={onLogout}
        className="text-slate-700"
      >
        <LogOut className="h-5 w-5 mr-2" />
        Déconnexion
      </Button>
    </nav>
  );
};
Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
