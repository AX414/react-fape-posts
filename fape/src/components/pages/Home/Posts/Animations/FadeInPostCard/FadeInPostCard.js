import FadeInSection from '../FadeInSection/FadeInSection';
import { useOnScreen } from '../useOnScreen';
import PostCard from '../../PostCard/PostCard';

export default function FadeInPostCard({ post }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <FadeInSection ref={ref} className={isVisible ? 'visible' : ''}>
      <PostCard post={post} />
    </FadeInSection>
  );
}
