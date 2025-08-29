import React, { useState } from 'react';

const CommunityPlatform = () => {
  const [activeTab, setActiveTab] = useState('messaging');

  const features = {
    messaging: {
      title: 'Rich Messaging & Communication',
      items: [
        {
          icon: '💬',
          title: 'Rich Messaging',
          description: 'Organize threaded video, screen, audio, or text discussions around specific topics.'
        },
        {
          icon: '📌',
          title: 'Pinned Posts',
          description: 'Highlight pieces of content from your conversations so they stay front and center for your members.'
        },
        {
          icon: '🔖',
          title: 'Set Aside',
          description: 'Bookmark important questions to come back to later. Then smash through your Set Aside list at a dedicated time.'
        },
        {
          icon: '📝',
          title: 'Transcriptions',
          description: 'Video and audio conversations are auto-transcribed and summarized for speedy recaps.'
        },
        {
          icon: '📱',
          title: 'Private Messages',
          description: 'Have private 1-on-1 or Group Conversations with members over video, audio, or text.'
        },
        {
          icon: '🔔',
          title: 'Smart Notifications',
          description: 'Stay updated with intelligent notifications that prioritize what matters most to you.'
        },
        {
          icon: '🌙',
          title: 'Do Not Disturb',
          description: 'Mute notifications during focus time or personal hours for a healthier work-life balance.'
        },
        {
            icon: '🎥',
            title: 'Live Video',
            description: 'Host live events and auto-post recordings so those who missed it can watch it in their own time.'
          },
          {
            icon: '🖥️',
            title: 'Screen Sharing',
            description: 'Record your screen and face at the same time. Reposition your face in realtime or toggle between the two.'
          },
          {
            icon: '🎙️',
            title: 'Webinars',
            description: 'Host professional webinars with Q&A, polls, and audience interaction features.'
          },
          {
            icon: '⏺️',
            title: 'Recording Library',
            description: 'Automatically store all event recordings in a central library accessible anytime.'
          },
          {
            icon: '🎭',
            title: 'Virtual Backgrounds',
            description: 'Customize your video calls with virtual backgrounds and noise cancellation.'
          }
      ]
    },

    community: {
      title: 'Community Management',
      items: [
        {
          icon: '📅',
          title: 'Calendar',
          description: 'Add events to a shared calendar, making it easy for members to stay in the loop.'
        },
        {
          icon: '👥',
          title: 'Member Directory',
          description: 'Help your community members discover, connect, and collaborate with each other.'
        },
        {
          icon: '🗳️',
          title: 'Polls',
          description: 'Engage with members by asking for their perspectives on various topics.'
        },
        {
          icon: '🌐',
          title: 'Spaces',
          description: 'Create a dedicated area for each of your online communities, groups, and cohorts.'
        },
        {
          icon: '🏆',
          title: 'Gamification',
          description: 'Boost engagement with badges, levels, and rewards for active participation.'
        },
        {
          icon: '💡',
          title: 'Idea Hub',
          description: 'Allow members to share ideas, vote, and collaborate on community-driven projects.'
        }
      ]
    },
    tools: {
      title: 'Tools & Integration',
      items: [
        {
          icon: '📲',
          title: 'Mobile App',
          description: 'Get your own branded app that gives members access to your community on the go.'
        },
        {
          icon: '🏷️',
          title: 'White Label',
          description: 'Use your own domain and branding to create a unique experience for your members.'
        },
        {
          icon: '📚',
          title: 'Courses',
          description: 'Give members an engaging way to grow their skills at their own pace with structured lessons and quizzes.'
        },
        {
          icon: '🤖',
          title: 'AI Assist',
          description: 'Your built-in AI assistant helps you make sense of questions you receive. It can even help you craft responses!'
        },
        {
          icon: '🔗',
          title: 'Third-Party Integrations',
          description: 'Connect seamlessly with Slack, Zoom, Google Drive, and other essential tools.'
        },
        {
          icon: '📊',
          title: 'Analytics Dashboard',
          description: 'Track engagement, growth, and activity trends with real-time reports.'
        }
      ]
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            PACKED WITH FEATURES
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Everything you need to keep members engaged
          </p>
          <p className="mt-3 text-lg text-gray-500">
            The complete toolkit for building your online community.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(features).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`mx-2 my-1 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {features[key].title}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features[activeTab].items.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

       
        </div>
      </div>

  );
};

export default CommunityPlatform;