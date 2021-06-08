import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  MailruShareButton,
  MailruIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

import * as S from './styles'

const ShareDropdown = ({
  url,
  isActive,
}: {
  url: string
  isActive: boolean
}) => {
  return (
    <S.ShareDropdownWrapper isActive={isActive}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <MailruShareButton url={url}>
        <MailruIcon size={32} round={true} />
      </MailruShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round={true} />
      </RedditShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon size={32} round={true} />
      </TumblrShareButton>
    </S.ShareDropdownWrapper>
  )
}

export default ShareDropdown
