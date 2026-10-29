
import Link from "next/link";

const courses = [
  {
    title: "Medical Office Assistant",
    category: "Health Administration",
    progress: 25,
    icon: "🏥",
    href: "/courses/medical-office-assistant",
  },
  {
    title: "Residential Framing",
    category: "Skilled Trades",
    progress: 0,
    icon: "🏗️",
    href: null,
  },
  {
    title: "Educational Assistant",
    category: "Education",
    progress: 0,
    icon: "📚",
    href: null,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-black text-blue-950">
            VCA
          </h1>

          <Link
            href="/"
            className="text-sm font-medium text-blue-900 hover:underline"
          >
            Exit Demo
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Student Welcome */}
        <div className="rounded-2xl bg-blue-950 p-8 text-white">
          <p className="text-sm text-blue-200">
            Student Dashboard
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Welcome back, Demo Student!
          </h2>

          <p className="mt-3 text-blue-100">
            Explore your courses and track your learning journey.
          </p>
        </div>

        {/* Student Statistics */}
        <section className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Enrolled Courses
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-950">
              3
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Lessons Completed
            </p>
            <p className="mt-2 text-3xl font-bold text-blue-950">
              1
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Campus Access
            </p>
            <p className="mt-2 text-lg font-bold text-blue-950">
              Coming Soon
            </p>
          </div>

        </section>

        {/* My Courses */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-950">
            My Courses
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sample courses and simulated progress for the VCA prototype.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >

                {/* Course Icon */}
                <div className="text-4xl">
                  {course.icon}
                </div>

                {/* Course Category */}
                <p className="mt-5 text-sm text-blue-700">
                  {course.category}
                </p>

                {/* Course Title */}
                <h3 className="mt-2 text-xl font-bold">
                  {course.title}
                </h3>

                {/* Course Progress */}
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-blue-700"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Course Action */}
                <div className="mt-auto pt-6">

                  {course.href ? (
                    <Link
                      href={course.href}
                      className="block rounded-lg bg-blue-900 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                    >
                      Open Sample Lesson
                    </Link>
                  ) : (
                    <div className="rounded-lg bg-slate-100 px-4 py-3 text-center text-sm font-medium text-slate-500">
                      Coming Soon
                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Virtual Campus Preview */}
        <section className="mt-12 rounded-2xl bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-blue-950">
            Virtual Campus
          </h2>

          <p className="mt-3 text-slate-600">
            Explore the future VCA virtual campus with
            interactive classrooms, educational spaces,
            and immersive learning experiences.
          </p>

          <div className="mt-6 inline-block rounded-lg bg-blue-100 px-5 py-3 text-sm font-semibold text-blue-800">
            3D Campus — Coming Soon
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 py-6 text-center">
          <p className="text-sm text-slate-500">
            Virtual Campus Academy — Technical MVP Demonstration 2026
          </p>
        </footer>

      </div>
    </main>
  );
}
