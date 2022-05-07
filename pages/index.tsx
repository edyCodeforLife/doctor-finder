// External modules
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

// Internal modules
import { BASE, KEY, VERSION } from '@/constants/endpoints';
import { setDoctors, setHospitals, setSpecializations } from '@/states/actions';
import { APP_DESCRIPTION } from '@/constants/app';
import Container from '@/components/Container';
import Header from '@/components/Header';
import If from '@/components/If';
import Main from '@/components/Main';
import { useAppContext } from '@/states/context';
import useExtract from '@/hooks/useExtract';
import useMounted from '@/hooks/useMounted';

const Home: NextPage = ({
  doctors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { dispatch } = useAppContext();

  // Get mounted state to ensure the page is mounted
  const mounted = useMounted();

  // Extract hospitals and specializations from doctors
  const { hospitals, specializations } = useExtract(doctors);

  // Set doctors, hospitals, and specializations to the global state
  useEffect(() => dispatch(setDoctors(doctors)), []);
  useEffect(() => dispatch(setHospitals(hospitals)), []);
  useEffect(() => dispatch(setSpecializations(specializations)), []);

  return (
    <>
      <Head>
        <title>Doctor Finder</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <If condition={mounted && doctors.length > 0}>
        <Container>
          <Header />
          <Main />
        </Container>
      </If>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch doctors from API
  const url = `${BASE}/${VERSION}/${KEY}`;
  const response = await fetch(url);
  const result = await response.json();

  // If there is an error, return not found
  if (!result) return { notFound: true };

  // Otherwise set doctors
  const doctors = result.data;

  return {
    props: { doctors },
  };
};

export default Home;
