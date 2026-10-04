import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag } from 'lucide-react';
import { JourneyPost } from '../types';

interface PostModalProps {
  post: JourneyPost | null;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#0D0F15] border border-[#232734] rounded-xl max-w-2xl w-full text-neutral-200 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-[#1A1D25] flex items-center justify-between bg-[#11141C] shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="text-white font-medium capitalize">{post.category.replace('-', ' ')}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close post modal"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#1C212E] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 leading-snug">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#12151E] border-l-2 border-neutral-400 rounded-r text-xs leading-relaxed text-neutral-300 italic">
            {post.summary}
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-4 bg-[#12151E] border border-[#1E2330] rounded-lg space-y-2 mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                Key Founder Takeaways
              </span>
              <ul className="list-disc list-inside text-xs space-y-1 text-neutral-300">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-[#1C202B] flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-500 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-neutral-400 px-2 py-0.5 bg-[#141822] border border-[#222838] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
