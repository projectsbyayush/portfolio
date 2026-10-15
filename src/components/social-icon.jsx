import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/brand-icons'
import { Icon } from '@/components/icon'
import { cn } from '@/lib/utils'

export function SocialIcon({ social, className }) {
  if (social.brand === 'github') {
    return <GithubIcon className={cn('size-[18px] shrink-0', className)} />
  }
  if (social.brand === 'linkedin') {
    return <LinkedinIcon className={cn('size-[18px] shrink-0', className)} />
  }
  if (social.brand === 'x') {
    return <XIcon className={cn('size-4 shrink-0', className)} />
  }
  if (social.brand === 'instagram') {
    return <InstagramIcon className={cn('size-[18px] shrink-0', className)} />
  }
  return <Icon name={social.icon} className={cn('text-[18px]', className)} />
}
