import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  Send, 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye,
  Play,
  Image as ImageIcon
} from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "CyberExpert",
      message: "Great article on ransomware prevention! Has anyone implemented the suggested backup strategies?",
      timestamp: "2 hours ago",
      avatar: "CE"
    },
    {
      id: 2,
      user: "SecurityPro",
      message: "We've been using the 3-2-1 backup rule mentioned in the blog. It saved us during a recent incident.",
      timestamp: "1 hour ago",
      avatar: "SP"
    },
    {
      id: 3,
      user: "ITManager",
      message: "Looking for recommendations on incident response tools. Any suggestions?",
      timestamp: "30 minutes ago",
      avatar: "IM"
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      user: "Admin",
      message: "Welcome to the Breaking Circuits community chat! Feel free to ask questions about cybersecurity.",
      timestamp: "10:30 AM",
      avatar: "AD"
    },
    {
      id: 2,
      user: "TechUser",
      message: "Is anyone else seeing increased phishing attempts lately?",
      timestamp: "10:45 AM",
      avatar: "TU"
    },
    {
      id: 3,
      user: "SecAnalyst",
      message: "Yes, we've noticed a 40% increase in our monitoring systems. Mostly targeting financial services.",
      timestamp: "10:47 AM",
      avatar: "SA"
    }
  ]);

  const [newChatMessage, setNewChatMessage] = useState("");

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: "You",
        message: newMessage,
        timestamp: "Just now",
        avatar: "YU"
      }]);
      setNewMessage("");
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChatMessage.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: "You",
        message: newChatMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "YU"
      }]);
      setNewChatMessage("");
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Ransomware: How to Protect Your Business in 2025",
      excerpt: "Ransomware attacks have increased by 300% this year. Learn the latest prevention strategies and response protocols to keep your business safe.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Threat Intelligence",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Ransomware", "Prevention", "Business Security"]
    },
    {
      id: 2,
      title: "Incident Response Playbook: Your First 60 Minutes Matter",
      excerpt: "When a security incident occurs, the first hour is critical. Our comprehensive playbook guides you through the essential steps for effective incident response.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Incident Response",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Incident Response", "Emergency", "Playbook"]
    },
    {
      id: 3,
      title: "Zero Trust Architecture: Building Unbreachable Networks",
      excerpt: "Traditional perimeter security is dead. Discover how Zero Trust architecture can revolutionize your network security and prevent lateral movement attacks.",
      author: "Jennifer Park",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Network Security",
      image: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Zero Trust", "Network Security", "Architecture"]
    },
    {
      id: 4,
      title: "AI-Powered Threat Detection: The Future of Cybersecurity",
      excerpt: "Machine learning and AI are transforming how we detect and respond to cyber threats. Explore the latest innovations in automated threat detection.",
      author: "Dr. Alex Thompson",
      date: "January 8, 2025",
      readTime: "15 min read",
      category: "AI Security",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Machine Learning", "Threat Detection"]
    },
    {
      id: 5,
      title: "Cloud Security Best Practices for Remote Teams",
      excerpt: "With remote work becoming permanent, securing cloud infrastructure is more critical than ever. Learn essential practices for cloud security.",
      author: "Lisa Wang",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Cloud Security",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Cloud Security", "Remote Work", "Best Practices"]
    },
    {
      id: 6,
      title: "Social Engineering Attacks: The Human Factor in Cybersecurity",
      excerpt: "Technology alone can't protect against social engineering. Understand the psychology behind these attacks and how to train your team to recognize them.",
      author: "Robert Kim",
      date: "January 3, 2025",
      readTime: "11 min read",
      category: "Social Engineering",
      image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Social Engineering", "Training", "Human Factor"]
    }
  ];

  const videoContent = [
    {
      id: 1,
      title: "Incident Response Demo: Real-Time Threat Containment",
      thumbnail: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "12:34"
    },
    {
      id: 2,
      title: "Ransomware Recovery: Step-by-Step Process",
      thumbnail: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "18:45"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            Cybersecurity Insights
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Stay ahead of cyber threats with expert insights, industry analysis, and practical security guidance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="community">Message Board</TabsTrigger>
              <TabsTrigger value="chat">Live Chat</TabsTrigger>
            </TabsList>

            {/* Blog Posts Tab */}
            <TabsContent value="blog" className="space-y-8">
              {/* Featured Video Section */}
              <div className="bg-cyber-dark p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Featured Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videoContent.map((video) => (
                    <div key={video.id} className="relative group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mt-3 text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded flex items-center gap-1">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{Math.floor(Math.random() * 1000) + 100} views</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Message Board Tab */}
            <TabsContent value="community" className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Community Discussion</h2>
                
                {/* Post a Message */}
                <form onSubmit={handleMessageSubmit} className="mb-8 p-4 bg-cyber-dark rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Start a Discussion</h3>
                  <Textarea
                    placeholder="Share your thoughts, ask questions, or discuss cybersecurity topics..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="mb-4 min-h-[100px]"
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Post Message
                  </Button>
                </form>

                {/* Messages */}
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex gap-4 p-4 bg-background rounded-lg border border-border">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {message.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">{message.user}</span>
                          <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                        </div>
                        <p className="text-muted-foreground">{message.message}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            👍 {Math.floor(Math.random() * 10) + 1}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Live Chat Tab */}
            <TabsContent value="chat" className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Live Community Chat</h2>
                
                {/* Chat Messages */}
                <div className="bg-cyber-dark rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-3">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {message.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm text-foreground">{message.user}</span>
                          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newChatMessage}
                    onChange={(e) => setNewChatMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 inline mr-1" />
                    This is a moderated community chat. Please keep discussions professional and on-topic.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;