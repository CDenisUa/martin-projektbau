// Core
import Image from 'next/image';
// Consts
import { SOCIAL_LINKS } from '@/consts/social';

type SocialLinksProps = {
  className?: string;
  size?: number;
};

export default function SocialLinks({ className = '', size = 22 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="social-link inline-flex"
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={size}
            height={size}
            className={`social-icon-img ${social.iconClass}`}
          />
        </a>
      ))}
    </div>
  );
}
