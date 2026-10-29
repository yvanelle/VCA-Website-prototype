
import Link from "next/link";

const courses = [
  {
    title: "Medical Office Assistant",
    category: "Health Administration",
    icon: "🏥",
    description:
      "Explore patient reception, communication and medical office procedures.",
    available: true,
  },
  {
    title: "Residential Framing",
    category: "Skilled Trades",
    icon: "🏗️",
    description:
      "Discover introductory residential construction and framing concepts.",
    available: false,
  },
  {
    title: "Educational Assistant",
    category: "Education",
    icon: "📚",
    description:
      "Explore classroom support and inclusive learning strategies.",
    available: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVIGATION */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">

          <Link href="/" className="block">
            <h1 className="text-4xl font-black text-blue-950">
              VCA
            </h1>
            <p className="text-xs tracking-widest text-slate-500">
              VIRTUAL CAMPUS ACADEMY
            </p>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">

            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <Link
              href="/courses"
              className="hover:text-blue-700"
            >
              Explore Courses
            </Link>

            <a
              href="#campus"
              className="hover:text-blue-700"
            >
              Virtual Campus
            </a>

            <Link
              href="/login"
              className="rounded-lg bg-blue-900 px-5 py-3 text-white hover:bg-blue-800"
            >
              Student Login
            </Link>

          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl">

          <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
            The Future of Virtual Education
          </span>

          <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Learn Beyond the Classroom.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Welcome to Virtual Campus Academy.
            Discover a new educational experience combining
            online learning, artificial intelligence and
            an immersive virtual campus.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/courses"
              className="rounded-lg bg-white px-7 py-4 font-semibold text-blue-950 hover:bg-blue-100"
            >
              Explore Our Courses
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-white px-7 py-4 font-semibold text-white hover:bg-white/10"
            >
              Try Student Demo
            </Link>

          </div>

          <p className="mt-8 text-sm text-blue-200">
            Technical Proof of Concept — 2026
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-950">
            A New Way to Learn
          </h2>

          <p className="mt-4 text-slate-600">
            One platform. Multiple learning experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-4xl">💻</div>

            <h3 className="mt-5 text-xl font-bold">
              Online Learning
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Access digital lessons, learning materials,
              quizzes and course activities from your browser.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🤖</div>

            <h3 className="mt-5 text-xl font-bold">
              AI Learning Assistant
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Discover how a future AI tutor could help
              students understand lessons and practice
              new concepts.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🌐</div>

            <h3 className="mt-5 text-xl font-bold">
              Virtual Campus
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Explore the vision of a 3D learning environment
              with interactive classrooms and shared spaces.
            </p>
          </div>

        </div>
      </section>

      {/* COURSES */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-950">
                Explore Our Programs
              </h2>

              <p className="mt-3 text-slate-600">
                Discover our sample learning programs.
              </p>
            </div>

            <Link
              href="/courses"
              className="font-semibold text-blue-800 hover:underline"
            >
              View All Courses
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl border border-slate-200 p-7 shadow-sm"
              >

                <div className="text-5xl">
                  {course.icon}
                </div>

                <p className="mt-6 text-sm font-medium text-blue-700">
                  {course.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {course.description}
                </p>

                {course.available ? (
                  <Link
                    href="/courses/medical-office-assistant"
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

        </div>
      </section>

      {/* VIRTUAL CAMPUS PREVIEW */}
      <section
        id="campus"
        className="bg-blue-50 px-6 py-20"
      >

        <div className="mx-auto max-w-5xl text-center">

          <div className="text-5xl">🏫</div>

          <h2 className="mt-6 text-3xl font-bold text-blue-950">
            Discover Our Virtual Campus
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Imagine an interactive virtual academy where
            students can explore classrooms, access learning
            resources and experience educational simulations.
          </p>

          <div className="mt-9 rounded-2xl border border-blue-200 bg-white p-10">

            <div className="text-5xl">🌐</div>

            <h3 className="mt-5 text-2xl font-bold text-blue-950">
              VCA 3D Campus
            </h3>

            <p className="mt-4 text-slate-600">
              Interactive campus demonstration
              currently in development.
            </p>

            <span className="mt-6 inline-block rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-900">
              Coming Soon
            </span>

          </div>

        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-white px-6 py-20 text-center">

        <h2 className="text-3xl font-bold text-blue-950">
          Experience VCA Today
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Explore our technical demonstration and
          discover the future of digital education.
        </p>

        <Link
          href="/login"
          className="mt-8 inline-block rounded-lg bg-blue-900 px-8 py-4 font-semibold text-white hover:bg-blue-800"
        >
          Enter Student Demo
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 px-6 py-10 text-center text-white">

        <h3 className="text-2xl font-bold">
          VCA
        </h3>

        <p className="mt-2 text-sm text-blue-200">
          Virtual Campus Academy
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm">

          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/courses" className="hover:underline">
            Courses
          </Link>

          <Link href="/login" className="hover:underline">
            Student Portal
          </Link>

        </div>

        <p className="mt-8 text-xs text-blue-200">
          Technical Prototype — Demonstration Only
        </p>

        <p className="mt-2 text-xs text-blue-200">
          Sample programs are not accredited qualifications.
        </p>

      </footer>

    </main>
  );
}
