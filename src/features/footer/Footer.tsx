import { SocialLink } from '@/components/SocialLink.tsx';

export default function Footer() {
  return (
    <div className="flex w-full justify-center italic">
      <p>
        Made with ❤️ available on&nbsp;
        <SocialLink
          href="https://github.com/thibautlfr/my-bento"
          label="GitHub"
        >
          GitHub
        </SocialLink>
      </p>
    </div>
  );
}
