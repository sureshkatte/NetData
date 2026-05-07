import React from 'react';
import './SlideMenu.css';

interface SlideMenuProps {
  userType?: 'CSR' | 'AGENT';
  uid: string;
  onLogout?: (uid: string) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ userType, uid, onLogout }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (): void => {
    if (onLogout) {
      onLogout(uid);
    }
  };

  return (
    <div className="slide-menu-container">
      <div
        className={`menu-selector ${isOpen ? 'hidden' : 'visible'}`}
        onClick={toggleMenu}
      >
        <span className="menu-toggle-text">GOTO</span>
      </div>

      <div className={`menu-content ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="menu-inner">
          <div className="menu-header">
            <button
              className="menu-hide-button"
              onClick={toggleMenu}
              aria-label="Hide menu"
            >
              HIDE
            </button>
            <span className="menu-divider">|</span>
          </div>

          <nav className="menu-nav">
            <a href="/" className="menu-link" title="Subagent Desktop">
              <img src="/images/desktop.gif" alt="Desktop" width={20} height={20} />
              <span>Desktop</span>
            </a>

            {userType === 'CSR' && (
              <>
                <span className="menu-divider">|</span>
                <button className="menu-link" title="Add/View Reminders">
                  <img
                    src="/images/addview_reminders.gif"
                    alt="Reminders"
                    width={20}
                    height={20}
                  />
                  <span>Add/View Reminders</span>
                </button>
                <span className="menu-divider">|</span>
                <button className="menu-link" title="Find Quote">
                  <img
                    src="/images/search.gif"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                  <span>Find Quote</span>
                </button>
              </>
            )}

            <span className="menu-divider">|</span>
            <button
              className="menu-link logout"
              onClick={handleLogout}
              title="Exit Database"
            >
              <img src="/images/logoff.gif" alt="Logout" width={16} height={16} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
