import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bakery-logo.png"
              alt="Sourdough Bakeerd Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Sourdough Bakeerd</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Our Specialties
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Menu
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">Order Now</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cupcakes-hero.png"
              alt="Colorful decorated cupcakes"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Freshly Baked Happiness Every Day
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Artisanal breads, pastries, and cakes made with love and the finest ingredients. Taste the difference
                  of handcrafted baking.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Button size="lg" asChild>
                    <Link href="#pricing">View Our Menu</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#contact">Visit Us Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Specialties
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Makes Our Bakery Special</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We take pride in our craft and commitment to quality in every bite.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/artisanal-breads.jpeg"
                    alt="Variety of artisanal breads including baguettes, sourdough, and seeded breads"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Artisanal Breads</h3>
                  <p className="text-muted-foreground">
                    Handcrafted sourdough, baguettes, and specialty breads made with traditional techniques and slow
                    fermentation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/delicious-pastries.avif"
                    alt="Assortment of fresh pastries including croissants and Danish pastries"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Delicious Pastries</h3>
                  <p className="text-muted-foreground">
                    Flaky croissants, Danish pastries, and sweet treats made fresh daily with European butter and local
                    ingredients.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/purple-cake.webp"
                    alt="Vibrant purple and blue layered cake with macarons"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Custom Cakes</h3>
                  <p className="text-muted-foreground">
                    Beautiful, personalized cakes for all occasions, crafted with artistic flair and premium
                    ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our happy customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The sourdough bread from Sweet Delights is the best I've ever tasted. I drive 30 minutes every
                    weekend just to get a fresh loaf!"
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Local Resident</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Sweet Delights made my daughter's wedding cake, and it was not only beautiful but absolutely
                    delicious. Our guests couldn't stop raving about it!"
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Michael Thompson</p>
                    <p className="text-sm text-muted-foreground">Father of the Bride</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As a café owner, I source all my pastries from Sweet Delights. My customers love them, and the
                    quality and consistency are unmatched."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Local Café Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Menu
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Fresh From Our Ovens</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our selection of freshly baked goods, available daily.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Artisanal Breads</h3>
                  <p className="text-muted-foreground">Our signature handcrafted breads</p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Sourdough Loaf</span>
                    <span className="font-medium">$6.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rustic Baguette</span>
                    <span className="font-medium">$4.25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Multigrain Boule</span>
                    <span className="font-medium">$7.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ciabatta</span>
                    <span className="font-medium">$5.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Olive Focaccia</span>
                    <span className="font-medium">$6.75</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full" asChild>
                    <Link href="#contact">Order Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pastries & Sweets</h3>
                  <p className="text-muted-foreground">Delightful treats for any time of day</p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Butter Croissant</span>
                    <span className="font-medium">$3.75</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pain au Chocolat</span>
                    <span className="font-medium">$4.25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Almond Danish</span>
                    <span className="font-medium">$4.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cinnamon Roll</span>
                    <span className="font-medium">$4.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fruit Tart</span>
                    <span className="font-medium">$5.25</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full" asChild>
                    <Link href="#contact">Order Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Specialty Cakes</h3>
                  <p className="text-muted-foreground">Custom cakes for special occasions</p>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Birthday Cake (6")</span>
                    <span className="font-medium">$35.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Birthday Cake (8")</span>
                    <span className="font-medium">$45.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Wedding Cake (per tier)</span>
                    <span className="font-medium">From $85.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cupcakes (dozen)</span>
                    <span className="font-medium">$30.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Custom Design</span>
                    <span className="font-medium">Inquire</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full" asChild>
                    <Link href="#contact">Order Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Experience Our Baked Goods?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Visit our bakery today or place an order for pickup or local delivery.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contact">Visit Our Bakery</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="#contact">Place an Order</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We'd love to hear from you. Visit us, call us, or send us a message.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-muted-foreground">123 Main Street, Bakerytown, BT 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">hello@sweetdelights.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 7am-6pm</p>
                    <p className="text-muted-foreground">Sat-Sun: 8am-4pm</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bakery-logo.png"
              alt="Sourdough Bakeerd Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Sourdough Bakeerd</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sourdough Bakeerd Bakery. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
