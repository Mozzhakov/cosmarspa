import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/share/175Sj9Y4Wz/?mibextid=wwXIfr"
        className="text-zinc-700 hover:text-[#999D8F]"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiFacebook size={20} />
      </a>
      <a
        href="https://www.instagram.com/cosmarspa_med_beauty?igsh=MWxjaTNtNjB0MHAxcA%3D%3D&utm_source=qr"
        className="text-zinc-700 hover:text-[#999D8F]"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://wa.me/13463722661"
        className="text-zinc-700 hover:text-[#999D8F]"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
      </a>
      <a
        href="https://t.me/cosmarspa_med_beauty"
        className="text-zinc-700 hover:text-[#999D8F]"
        aria-label="Telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane size={20} />
      </a>
      <a
        href="viber://chat?number=%2B13463722661"
        className="text-zinc-700 hover:text-[#999D8F]"
        aria-label="Viber"
      >
        <FaViber size={20} />
      </a>
    </div>
  );
}
