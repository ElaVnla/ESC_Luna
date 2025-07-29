const SplashScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <img src="/logo.svg" alt="Loading..." style={{ height: '10%' }} />
    </div>
  );
};

export default SplashScreen;
