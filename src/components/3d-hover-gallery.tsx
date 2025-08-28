import React, { useRef, useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export interface MemberGalleryProps {
  title?: string;
  subtitle?: string;
  members?: Array<{
    id: number;
    name: string;
    role: string;
    image: string;
    joinedDate: string;
  }>;
  itemWidth?: number;
  itemHeight?: number;
  gap?: number;
  perspective?: number;
  hoverScale?: number;
  transitionDuration?: number;
  backgroundColor?: string;
  activeWidth?: number;
  enableKeyboardNavigation?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  onMemberClick?: (index: number, member: any) => void;
  onMemberHover?: (index: number, member: any) => void;
}

const MemberShowcaseGallery: React.FC<MemberGalleryProps> = ({
  title = "Our Members",
  subtitle = "Meet the amazing people who make our community special",
  members = [
    
    {
      id: 2,
      name: "Maria Garcia",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2021-11-08"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Moderator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2022-05-22"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Active Member",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2023-01-10"
    },
    {
      id: 5,
      name: "Michael Taylor",
      role: "Event Organizer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2021-08-30"
    },
    {
      id: 6,
      name: "Emma Roberts",
      role: "Discussion Leader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2022-07-14"
    },
    {
      id: 7,
      name: "David Kim",
      role: "Community Advocate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2022-09-05"
    },
    {
      id: 8,
      name: "Olivia Martinez",
      role: "Content Contributor",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face",
      joinedDate: "2023-02-18"
    },
  ],
  itemWidth = 14,
  itemHeight = 18,
  gap = 1.2,
  perspective = 40,
  hoverScale = 12,
  transitionDuration = 0.8,
  backgroundColor,
  activeWidth = 42,
  enableKeyboardNavigation = true,
  autoPlay = false,
  autoPlayDelay = 3000,
  className,
  style,
  onMemberClick,
  onMemberHover,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Effect for auto-play functionality
  useEffect(() => {
    if (autoPlay && members.length > 0) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = prev === null ? 0 : (prev + 1) % members.length;
          return nextIndex;
        });
      }, autoPlayDelay);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
    if (!autoPlay && autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, [autoPlay, autoPlayDelay, members.length]);

  const handleMemberClick = (index: number, member: any) => {
    if (isMobile) {
      // On mobile, open modal instead of expanding the card
      setModalOpen(index);
    } else {
      setActiveIndex(activeIndex === index ? null : index);
    }
    onMemberClick?.(index, member);
  };

  const handleMemberHover = (index: number, member: any) => {
    if (!autoPlay && !isMobile) {
      setActiveIndex(index);
    }
    onMemberHover?.(index, member);
  };

  const handleMemberLeave = () => {
    if (!autoPlay && !isMobile) {
      setActiveIndex(null);
    }
  };

  const handleMemberFocus = (index: number, member: any) => {
    setFocusedIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (!enableKeyboardNavigation) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleMemberClick(index, members[index]);
        break;
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : members.length - 1;
        (containerRef.current?.children[prevIndex] as HTMLElement)?.focus();
        break;
      case "ArrowRight":
        event.preventDefault();
        const nextIndex = index < members.length - 1 ? index + 1 : 0;
        (containerRef.current?.children[nextIndex] as HTMLElement)?.focus();
        break;
      case "Escape":
        setModalOpen(null);
        break;
    }
  };

  const getItemStyle = (index: number): React.CSSProperties => {
    const isActive = activeIndex === index;
    const isFocused = focusedIndex === index;

    return {
      width: isActive && !isMobile ? `${activeWidth}vw` : `${itemWidth}vw`,
      height: isActive && !isMobile ? `calc(${itemHeight * 1.2}vw + ${itemHeight * 1.2}vh)` : `calc(${itemHeight}vw + ${itemHeight}vh)`,
      backgroundImage: `url(${members[index].image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor,
      cursor: "pointer",
      filter: isActive || isFocused ? "inherit" : "brightness(0.95)",
      transform: isActive && !isMobile ? `translateZ(calc(${hoverScale}vw + ${hoverScale}vh))` : "none",
      transition: `transform ${transitionDuration}s ease, filter ${transitionDuration}s ease, width ${transitionDuration}s ease`,
      willChange: "transform, filter, width",
      zIndex: isActive ? 100 : "auto",
      margin: isActive && !isMobile ? "0 0.45vw" : "0",
      outline: isFocused ? "2px solid #8b5cf6" : "none",
      outlineOffset: "2px",
      borderRadius: "1rem",
    };
  };

  // Format date to show how long ago member joined
  const formatJoinDate = (dateString: string) => {
    const joinDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - joinDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) return `Joined ${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `Joined ${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
    const diffYears = Math.floor(diffMonths / 12);
    return `Joined ${diffYears} year${diffYears !== 1 ? 's' : ''} ago`;
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
            <p className="text-purple-700 uppercase tracking-wider font-medium text-sm">
              COMMUNITY SPOTLIGHT
            </p>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Gallery container */}
        <div
          className={cn(
            "flex items-center justify-center min-h-[60vh] w-full overflow-hidden",
            className
          )}
          style={backgroundColor ? { backgroundColor, ...style } : style}
        >
          <div
            ref={containerRef}
            className="flex justify-center items-center w-full flex-wrap md:flex-nowrap px-4 md:px-0"
            style={{
              perspective: `calc(${perspective}vw + ${perspective}vh)`,
              gap: `${gap}rem`,
            }}
          >
            {members.map((member, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={member.id}
                  className="relative will-change-transform rounded-lg shadow-lg group"
                  style={getItemStyle(index)}
                  tabIndex={enableKeyboardNavigation ? 0 : -1}
                  onClick={() => handleMemberClick(index, member)}
                  onMouseEnter={() => handleMemberHover(index, member)}
                  onMouseLeave={handleMemberLeave}
                  onFocus={() => handleMemberFocus(index, member)}
                  onBlur={() => setFocusedIndex(null)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="button"
                  aria-label={`Member: ${member.name}, ${member.role}`}
                  aria-pressed={isActive}
                >
                  {/* Member info overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg transition-all duration-500 ${
                    isActive || isMobile ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <h3 className="font-bold text-lg truncate">{member.name}</h3>
                    <p className="text-sm text-purple-200">{member.role}</p>
                    <p className="text-xs text-gray-300 mt-1">{formatJoinDate(member.joinedDate)}</p>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && !isMobile && (
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-400 animate-pulse ring-2 ring-white"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Modal */}
        {modalOpen !== null && isMobile && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setModalOpen(null)}>
            <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-64 w-full">
                <img 
                  src={members[modalOpen].image} 
                  alt={members[modalOpen].name}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
                  onClick={() => setModalOpen(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{members[modalOpen].name}</h3>
                <p className="text-purple-600 font-medium">{members[modalOpen].role}</p>
                <p className="text-gray-500 mt-2">{formatJoinDate(members[modalOpen].joinedDate)}</p>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div className="flex space-x-3 mt-6">
                  <button className="flex-1 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium">
                    Message
                  </button>
                  <button className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-medium">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats section */}
       

        {/* CTA section */}
       
      </div>
    </section>
  );
};

export default MemberShowcaseGallery;