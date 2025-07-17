import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Editor-in-Chief',
      bio: 'Full-stack developer and tech enthusiast with 8+ years of experience in web development.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      social: {
        twitter: '#',
        github: '#',
        linkedin: '#',
        email: 'sarah@blog.com'
      }
    },
    {
      name: 'Alex Rodriguez',
      role: 'Senior Writer',
      bio: 'Senior React developer and architect with expertise in large-scale application development.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: {
        twitter: '#',
        github: '#',
        linkedin: '#',
        email: 'alex@blog.com'
      }
    },
    {
      name: 'Emma Thompson',
      role: 'UX Writer',
      bio: 'UX/UI designer and researcher specializing in user psychology and behavioral design.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: {
        twitter: '#',
        github: '#',
        linkedin: '#',
        email: 'emma@blog.com'
      }
    }
  ];

  const stats = [
    { label: 'Articles Published', value: '150+' },
    { label: 'Monthly Readers', value: '25K+' },
    { label: 'Countries Reached', value: '45+' },
    { label: 'Community Members', value: '5K+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate writers and developers sharing insights about technology, 
              design, and the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                We believe in the power of knowledge sharing. Our mission is to create high-quality, 
                accessible content that helps developers, designers, and tech enthusiasts stay current 
                with industry trends and best practices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From beginner tutorials to advanced techniques, we cover topics that matter to the 
                modern digital professional. Our goal is to build a community where learning never stops.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse team brings together expertise from development, design, and content creation 
              to deliver valuable insights to our readers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  
                  <Badge variant="outline" className="mb-4">
                    {member.role}
                  </Badge>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Quality First
                </h3>
                <p className="text-muted-foreground">
                  We prioritize depth and accuracy over quantity, ensuring every article provides real value to our readers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Community Driven
                </h3>
                <p className="text-muted-foreground">
                  We believe in the power of community feedback and collaboration to create better content for everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground">
                  The tech world evolves rapidly, and we're committed to staying current and sharing the latest insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with like-minded professionals, share your experiences, and stay updated with the latest in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium">
              Subscribe to Newsletter
            </button>
            <button className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors font-medium">
              Follow on Twitter
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;