import { MutatingDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <MutatingDots
        height="100"
        width="100"
        color="#a4a4a4bd"
        secondaryColor="#4b4b2cb8"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}
