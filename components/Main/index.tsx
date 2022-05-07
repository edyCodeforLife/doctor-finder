// External modules
import Image from 'next/image';

// Internal modules
import {
  about,
  card,
  heading,
  info,
  left,
  main,
  notFound,
  price,
  right,
  subheading,
} from '@/components/Main/style';
import Card from '@/components/Card';
import Heading from '@/components/Heading';
import If from '@/components/If';
import Item from '@/components/Item';
import List from '@/components/List';
import { useAppContext } from '@/states/context';
import useFilter from '@/hooks/useFilter';

const Main = () => {
  const { state } = useAppContext();

  // Get doctors from the global state
  const { doctors } = state;

  // Filter doctors based on the given criteria
  const { filteredDoctors } = useFilter(doctors);

  return (
    <main css={main}>
      <If condition={filteredDoctors.length > 0}>
        <List>
          {filteredDoctors.map(doctor => (
            <Item key={doctor.doctor_id}>
              <Card css={card}>
                <div css={left}>
                  <Image
                    src={doctor.photo.formats.thumbnail}
                    alt={`Foto ${doctor.name}`}
                    width={100}
                    height={100}
                  />
                </div>
                <div css={right}>
                  <div css={info}>
                    <Heading level={2} css={heading}>
                      {doctor.name}
                    </Heading>
                    <Heading level={3} css={subheading}>
                      {doctor.hospital[0].name} - {doctor.specialization.name}
                    </Heading>
                    <p
                      dangerouslySetInnerHTML={{ __html: doctor.about_preview }}
                      css={about}
                    />
                  </div>
                  <span css={price}>{doctor.price.formatted}</span>
                </div>
              </Card>
            </Item>
          ))}
        </List>
      </If>

      <If condition={filteredDoctors.length < 1}>
        <Card css={notFound}>Dokter tidak ditemukan</Card>
      </If>
    </main>
  );
};

export default Main;
