import { styled } from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.SMALL};
  background-color: ${Color.MONO_A};
  max-width: 192px;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  > img {
    border-radius: ${Radius.SMALL} ${Radius.SMALL} 0 0;
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type Props = {
  authorImageUrl: string;
  authorName: string;
  bookId: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
  name: string;
};

export const BookCard: React.FC<Props> = (props) => {
  return (
    <_Wrapper href={`/books/${props.bookId}`}>
      {props.imageUrl != null && (
        <_ImgWrapper>
          <Image alt={props.imageAlt} height={128} objectFit="cover" src={props.imageUrl} width={192} />
        </_ImgWrapper>
      )}

      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {props.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {props.authorImageUrl != null && (
            <_AvatarWrapper>
              <Image alt={props.authorName} height={32} objectFit="cover" src={props.authorImageUrl} width={32} />
            </_AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {props.authorName}
          </Text>
        </Flex>
      </Flex>
    </_Wrapper>
  );
};
