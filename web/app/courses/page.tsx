
import Link from "next/link";

const courses = [
  {
    title: "Medical Office Assistant",
    category: "Health Administration",
    icon: "🏥",
    description:
      "Learn the basics of patient reception, communication, and medical office procedures.",
    href: "/courses/medical-office-assistant",
    available: true,
  },
  {
    title: "Residential Framing",
    category: "Skilled Trades",
    icon: "🏗️",
    description:
      "Explore the fundamentals of residential construction and framing.",
    href: "",
    available: false,
  },
  {
    title: "Educational Assistant",
    category: "Education",
    icon: "📚",
    description:
      "Discover classroom support and inclusive learning strategies.",
    href: "",
    available: false,
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-3xl font-black text-blue-950"
          >
            VCA
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-semibold text-blue-800 hover:underline"
          >
            Back to Dashboard
          </Link>
        </nav>
      </header>

      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-blue-200">
            Virtual Campus Academy
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Explore Our Courses
          </h1>

          <p className="mt-4 text-blue-100">
            Discover the future of online and interactive learning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-950">
          Our Programs
        </h2>

        <p className="mt-3 text-slate-600">
          Sample courses for the VCA technical prototype.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-5xl">
                {course.icon}
              </div>

              <p className="mt-6 text-sm text-blue-700">
                {course.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {course.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {course.description}
              </p>

              {course.available ? (
                <Link
                  href={course.href}
                  className="mt-8 rounded-lg bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
                >
                  View Sample Course
                </Link>
              ) : (
                <div className="mt-8 rounded-lg bg-slate-100 px-5 py-3 text-center font-semibold text-slate-500">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Demonstration content only. Not accredited programs.
        </p>
      </section>

    </main>
  );
}
