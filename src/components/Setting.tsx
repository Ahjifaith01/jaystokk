import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

const Setting: React.FC = () => {
  return (
    <div id="set" className="min-h-screen bg-[#106cb8] bg-gradient-to-r from-black/60 to-transparent shadow-lg">
      <div id="Setting" className="p-6">
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-file-invoice mr-2"></i> Account Detail
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-layer-group mr-2"></i> Category
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-list mr-2"></i> Preference
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-shield-halved mr-2"></i> Privacy & Security
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-window-restore mr-2"></i> Reset App Data
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-messages-dollar mr-2"></i> Send Feedback
        </p>
        <hr className="border-white/30" />
        <p className="text-white mb-4 flex items-center">
          <i className="fas fa-apple-crate mr-2"></i> Rate App
        </p>
        <hr className="border-white/30" />
      </div>

      <div className="setbut flex justify-center mt-8">
        <button className="w-32 h-12 border border-whitesmoke rounded-lg bg-[#0D47A1] text-white shadow-lg hover:bg-[#1565C0] transition-all ease-in-out cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Setting;
