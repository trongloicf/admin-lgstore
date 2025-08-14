// Logo.jsx
import '../assets/styles/Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src="/lg-trans.png" alt="" style={{
        width: '200px',
        height: '75px',
        objectFit: 'cover'
      }}/>
    </div>
  );
};

export default Logo;
