import moment from 'moment-timezone';
import { useId } from 'react';

import { BookCard } from '../../features/book/components/BookCard';
import { FeatureCard } from '../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../features/feature/hooks/useFeatureList';
import { RankingCard } from '../../features/ranking/components/RankingCard';
import { useRankingList } from '../../features/ranking/hooks/useRankingList';
import { useRelease } from '../../features/release/hooks/useRelease';
import { Box } from '../../foundation/components/Box';
import { Flex } from '../../foundation/components/Flex';
import { Spacer } from '../../foundation/components/Spacer';
import { Text } from '../../foundation/components/Text';
import { Color, Space, Typography } from '../../foundation/styles/variables';
import { getDayOfWeekStr } from '../../lib/date/getDayOfWeekStr';
import { getImageUrl } from '../../lib/image/getImageUrl';

import { CoverSection } from './internal/CoverSection';

export const TopPage: React.FC = () => {
  const todayStr = getDayOfWeekStr(moment());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });
  const { data: featureList } = useFeatureList({ query: {} });
  const { data: rankingList } = useRankingList({ query: {} });

  const pickupA11yId = useId();
  const rankingA11yId = useId();
  const todayA11yId = useId();

  return (
    <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
      <Box as="header" maxWidth="100%" width="100%">
        <CoverSection />
      </Box>
      <Box as="main" maxWidth="100%" width="100%">
        <Box aria-labelledby={pickupA11yId} as="section" maxWidth="100%" mt={16} width="100%">
          <Text as="h2" color={Color.MONO_100} id={pickupA11yId} typography={Typography.NORMAL20} weight="bold">
            ピックアップ
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            <Flex align="stretch" direction="row" gap={Space * 2} justify="flex-start">
              {featureList?.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  authorImageUrl={getImageUrl({
                    format: 'jpg',
                    height: 32 * window.devicePixelRatio,
                    imageId: feature.book.author.image.id,
                    width: 32 * window.devicePixelRatio,
                  })}
                  authorName={feature.book.author.name}
                  bookId={feature.book.id}
                  description={feature.book.description}
                  imageAlt={feature.book.image.alt}
                  imageUrl={getImageUrl({
                    format: 'jpg',
                    height: 96 * window.devicePixelRatio,
                    imageId: feature.book.image.id,
                    width: 96 * window.devicePixelRatio,
                  })}
                  name={feature.book.name}
                />
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={rankingA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={rankingA11yId} typography={Typography.NORMAL20} weight="bold">
            ランキング
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="hidden" overflowY="hidden">
            <Flex align="center" as="ul" direction="column" justify="center">
              {rankingList?.map((ranking) => (
                <RankingCard
                  key={ranking.id}
                  authorImageUrl={getImageUrl({
                    format: 'jpg',
                    height: 32 * window.devicePixelRatio,
                    imageId: ranking.book.author.image.id,
                    width: 32 * window.devicePixelRatio,
                  })}
                  authorName={ranking.book.author.name}
                  bookId={ranking.book.id}
                  description={ranking.book.description}
                  imageAlt={ranking.book.image.alt}
                  imageUrl={getImageUrl({
                    format: 'jpg',
                    height: 96 * window.devicePixelRatio,
                    imageId: ranking.book.image.id,
                    width: 96 * window.devicePixelRatio,
                  })}
                  name={ranking.book.name}
                />
              ))}
            </Flex>
          </Box>
        </Box>

        <Spacer height={Space * 2} />

        <Box aria-labelledby={todayA11yId} as="section" maxWidth="100%" width="100%">
          <Text as="h2" color={Color.MONO_100} id={todayA11yId} typography={Typography.NORMAL20} weight="bold">
            本日更新
          </Text>
          <Spacer height={Space * 2} />
          <Box maxWidth="100%" overflowX="scroll" overflowY="hidden">
            <Flex align="stretch" gap={Space * 2} justify="flex-start">
              {release?.books.map((book) => (
                <BookCard
                  key={book.id}
                  authorImageUrl={getImageUrl({
                    format: 'jpg',
                    height: 32 * window.devicePixelRatio,
                    imageId: book.author.image.id,
                    width: 32 * window.devicePixelRatio,
                  })}
                  authorName={book.author.name}
                  bookId={book.id}
                  description={book.description}
                  imageAlt={book.image.alt}
                  imageUrl={getImageUrl({
                    format: 'jpg',
                    height: 128 * window.devicePixelRatio,
                    imageId: book.image.id,
                    width: 192 * window.devicePixelRatio,
                  })}
                  name={book.name}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
