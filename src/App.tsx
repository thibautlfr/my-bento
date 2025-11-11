import CrossLayout from '@/components/layout/CrossLayout';
import SplitLayout from '@/components/layout/SplitLayout';
import ProfileSidebar from '@/components/features/ProfileSidebar';
import Home from '@/pages/Home';

function App() {
  return (
    <CrossLayout>
      <SplitLayout leftContent={<ProfileSidebar />} rightContent={<Home />} />
    </CrossLayout>
  );
}

export default App;
