import Layout from '@components/common/Layout';

const Mypage = () => {
  return (
    <Layout main={true} height={670} width={1400}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        <Layout height={500} width={300}></Layout>
        <Layout height={500} width={400}></Layout>
        <Layout height={500} width={500}></Layout>
      </div>
    </Layout>
  );
};

export default Mypage;
