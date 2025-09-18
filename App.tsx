import { ShowroomHeader } from './components/ShowroomHeader';
import { CarDisplay } from './components/CarDisplay';
import { CustomizationSection } from './components/CustomizationSection';
import { DigitalScreens } from './components/DigitalScreens';
import { LoungeArea } from './components/LoungeArea';

const featuredCars = [
  {
    id: '1',
    name: 'APEX',
    model: 'GT-R Sport',
    price: '$89,500',
    specs: ['650 HP Twin-Turbo V8', '0-60 in 2.8s', 'Carbon Fiber Body', 'Premium Red Leather'],
    imageUrl: 'https://images.unsplash.com/photo-1751077932652-b1237f626928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXIlMjBsdXh1cnl8ZW58MXx8fHwxNzU4MjAxMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true
  },
  {
    id: '2',
    name: 'LUXE',
    model: 'Executive Sedan',
    price: '$75,900',
    specs: ['450 HP V6 Hybrid', 'All-Wheel Drive', 'Heated Red Seats', 'Advanced Safety Suite'],
    imageUrl: 'https://images.unsplash.com/photo-1704786529856-7987a2c3fcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTgyMDExMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: '3',
    name: 'TERRAIN',
    model: 'Luxury SUV',
    price: '$92,300',
    specs: ['550 HP Supercharged V8', '7-Seat Configuration', 'Off-Road Package', 'Premium Sound System'],
    imageUrl: 'https://images.unsplash.com/photo-1611025106442-2f505ace8e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBTVVYlMjBjYXJ8ZW58MXx8fHwxNzU4MjAxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  },
  {
    id: '4',
    name: 'WIND',
    model: 'Convertible',
    price: '$68,750',
    specs: ['380 HP Turbo V6', 'Soft-Top Convertible', 'Sport Suspension', 'Red Interior Accents'],
    imageUrl: 'https://images.unsplash.com/photo-1616269218527-451c383e65c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjb252ZXJ0aWJsZSUyMGNhcnxlbnwxfHx8fDE3NTgyMDExMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <ShowroomHeader />

      {/* Hero Section with Glass Window Effect */}
      <section className="relative py-16 px-8">
        {/* Large floor-to-ceiling windows effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="space-y-6 mb-16">
            <h1 className="text-4xl lg:text-6xl text-white">
              Welcome to <span className="text-red-500">Red Luxury</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the ultimate collection of premium red vehicles in our state-of-the-art showroom. 
              Every car tells a story of passion, performance, and precision.
            </p>
          </div>

          {/* Ambient red accent lighting effect */}
          <div className="absolute -top-20 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </section>

      {/* Main Vehicle Display Area */}
      <section id="vehicles" className="py-16 px-8">
        {/* Polished marble floor effect */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white mb-4">
              Featured <span className="text-red-500">Collection</span>
            </h2>
            <p className="text-white/70">
              Discover our handpicked selection of premium red vehicles
            </p>
          </div>

          {/* Car Display Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
            {featuredCars.map((car) => (
              <CarDisplay key={car.id} {...car} />
            ))}
          </div>

          {/* Digital Screens Section */}
          <div className="mb-16">
            <h3 className="text-2xl text-white mb-8 text-center">
              Live <span className="text-red-500">Information</span>
            </h3>
            <DigitalScreens />
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <CustomizationSection />

      {/* Lounge Area */}
      <LoungeArea />

      {/* Footer */}
      <footer className="bg-black border-t border-red-500/20 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl text-white mb-4">
                <span className="text-red-500">RED</span>
                <span className="text-white/90">LUXURY</span>
              </div>
              <p className="text-white/70">
                Your premier destination for luxury red vehicles.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Showroom</h4>
              <div className="space-y-2 text-white/70">
                <p>Mon-Fri: 9AM-8PM</p>
                <p>Saturday: 9AM-6PM</p>
                <p>Sunday: 11AM-5PM</p>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Services</h4>
              <div className="space-y-2 text-white/70">
                <p>Test Drives</p>
                <p>Financing</p>
                <p>Trade-ins</p>
                <p>Maintenance</p>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <div className="space-y-2 text-white/70">
                <p>📞 (555) 123-4567</p>
                <p>📧 info@redluxury.com</p>
                <p>📍 123 Luxury Lane, City</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-500/20 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 Red Luxury Showroom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}