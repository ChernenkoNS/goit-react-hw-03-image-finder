import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Dna
        visible={true}
        height="200"
        width="800"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
