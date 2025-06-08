// import { MapPin, Phone, Mail, Clock } from "lucide-react"
//
// interface ContactInfoProps {
//   dictionary: {
//     info: {
//       address: string
//       phone: string
//       email: string
//       hours: string
//     }
//   }
// }
//
// export default function ContactInfo({ dictionary }: ContactInfoProps) {
//   const { address, phone, email, hours } = dictionary.info
//
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <div className="mb-6">
//         <div className="flex items-start mb-2">
//           <MapPin className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//           <div>
//             <h3 className="font-heading text-lg mb-1">{address}</h3>
//             <p className="text-zinc-700">
//               26202 Oak Ridge Dr, Suite B 101
//               <br />
//               Spring, TX 77380
//             </p>
//           </div>
//         </div>
//       </div>
//
//       <div className="mb-6">
//         <div className="flex items-start mb-2">
//           <Phone className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//           <div>
//             <h3 className="font-heading text-lg mb-1">{phone}</h3>
//             <p className="text-zinc-700">+1 (346) 372-2661</p>
//           </div>
//         </div>
//       </div>
//
//       <div className="mb-6">
//         <div className="flex items-start mb-2">
//           <Mail className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//           <div>
//             <h3 className="font-heading text-lg mb-1">{email}</h3>
//             <p className="text-zinc-700">cosmarspamedbeauty@gmail.com</p>
//           </div>
//         </div>
//       </div>
//
//       <div>
//         <div className="flex items-start mb-2">
//           <Clock className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//           <div>
//             <h3 className="font-heading text-lg mb-1">{hours}</h3>
//             <p className="text-zinc-700">
//               Monday - Saturday: 10:00 AM - 7:00 PM
//               <br />
//               Sunday: Closed
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa";
//
// interface ContactInfoProps {
//   dictionary: {
//     info: {
//       address: string;
//       phone: string;
//       email: string;
//       hours: string;
//     };
//   };
// }
//
// export default function ContactInfo({ dictionary }: ContactInfoProps) {
//   const { address, phone, email, hours } = dictionary.info;
//
//   return (
//       <div className="bg-white p-6 rounded-lg shadow-sm">
//         {/* Address */}
//         <div className="mb-6">
//           <div className="flex items-start mb-2">
//             <FaMapMarkerAlt className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//             <div>
//               <h3 className="font-heading text-lg mb-1">{address}</h3>
//               <p className="text-zinc-700">
//                 26202 Oak Ridge Dr, Suite B 101
//                 <br />
//                 Spring, TX 77380
//               </p>
//             </div>
//           </div>
//         </div>
//
//         {/* Phone */}
//         <div className="mb-6">
//           <div className="flex items-start mb-2">
//             <FaPhoneAlt className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//             <div>
//               <h3 className="font-heading text-lg mb-1">{phone}</h3>
//               <p className="text-zinc-700">+1 (346) 372-2661</p>
//             </div>
//           </div>
//         </div>
//
//         {/* Email */}
//         <div className="mb-6">
//           <div className="flex items-start mb-2">
//             <FaEnvelope className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//             <div>
//               <h3 className="font-heading text-lg mb-1">{email}</h3>
//               <p className="text-zinc-700">cosmarspamedbeauty@gmail.com</p>
//             </div>
//           </div>
//         </div>
//
//         {/* Hours */}
//         <div className="mb-6">
//           <div className="flex items-start mb-2">
//             <FaClock className="text-[#B7BBAC] mr-3 mt-1" size={20} />
//             <div>
//               <h3 className="font-heading text-lg mb-1">{hours}</h3>
//               <p className="text-zinc-700">
//                 Monday - Saturday: 10:00 AM - 7:00 PM
//                 <br />
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>
//
//         {/* Social Links */}
//         <div className="mt-6">
//           <h3 className="font-heading text-lg mb-2">Social Links</h3>
//           <div className="flex space-x-4">
//             <a href="https://facebook.com" className="text-zinc-700 hover:text-[#999D8F]" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF size={20} />
//             </a>
//             <a href="https://instagram.com" className="text-zinc-700 hover:text-[#999D8F]" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//               <FaInstagram size={20} />
//             </a>
//             <a href="https://wa.me/13463722661" className="text-zinc-700 hover:text-[#999D8F]" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
//               <FaWhatsapp size={20} />
//             </a>
//             <a href="https://t.me/cosmarspa_med_beauty" className="text-zinc-700 hover:text-[#999D8F]" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
//               <FaTelegramPlane size={20} />
//             </a>
//             <a href="viber://chat?number=%2B13463722661" className="text-zinc-700 hover:text-[#999D8F]" aria-label="Viber">
//               <FaViber size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//   );
// }
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaViber,
  FaShareAlt,
} from "react-icons/fa";
import SocialLinks from "@/components/ui/social-links";

interface ContactInfoProps {
  dictionary: {
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
      links: string;
    };
  };
}

export default function ContactInfo({ dictionary }: ContactInfoProps) {
  const { address, phone, email, hours, links } = dictionary.info;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Address */}
      <div className="mb-6">
        <div className="flex items-start mb-2">
          <FaMapMarkerAlt className="text-[#B7BBAC] mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-heading text-lg mb-1">{address}</h3>
            <p className="text-zinc-700">
              26202 Oak Ridge Dr, Suite B 101
              <br />
              Spring, TX 77380
            </p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="mb-6">
        <div className="flex items-start mb-2">
          <FaPhoneAlt className="text-[#B7BBAC] mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-heading text-lg mb-1">{phone}</h3>
            <p className="text-zinc-700">+1 (346) 372-2661</p>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <div className="flex items-start mb-2">
          <FaEnvelope className="text-[#B7BBAC] mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-heading text-lg mb-1">{email}</h3>
            <p className="text-zinc-700">cosmarspamedbeauty@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="mb-6">
        <div className="flex items-start mb-2">
          <FaClock className="text-[#B7BBAC] mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-heading text-lg mb-1">{hours}</h3>
            <p className="text-zinc-700">
              Monday - Saturday: 10:00 AM - 7:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <div className="flex items-start mb-2">
          <FaShareAlt className="text-[#B7BBAC] mr-3 mt-1" size={20} />
          <div>
            <h3 className="font-heading text-lg mb-2">{links}</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
