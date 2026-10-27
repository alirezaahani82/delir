
const profile = {
  name: "رقیه دلیر اسمعیلی آذر",
  title: "فعال سیاسی، اقتصادی و اجتماعی",
  subtitle: "روایت تجربه، مسئولیت و حضور اجتماعی",
};

const experiences = [
  {
    number: "۰۱",
    title: "فعالیت در حوزه بانوان",
    description:
      "مشاور امور بانوان حزب تمدن اسلامی در استان آذربایجان‌شرقی و معاون بانوان حزب حامیان انقلاب اسلامی در این استان.",
    category: "فعالیت اجتماعی و سیاسی",
  },
  {
    number: "۰۲",
    title: "فعالیت اقتصادی و بازرگانی",
    description:
      "فعال و کارآفرین در حوزه بازرگانی مواد شیمیایی با تمرکز بر فعالیت‌های اقتصادی و ظرفیت‌های اقتصاد شهری.",
    category: "اقتصاد و کارآفرینی",
  },
  {
    number: "۰۳",
    title: "تحصیلات و دانش تخصصی",
    description:
      "دارای مدرک کارشناسی شیمی و دانش‌آموخته زبان انگلیسی.",
    category: "تحصیلات",
  },
  {
    number: "۰۴",
    title: "حضور اجتماعی و انقلابی",
    description:
      "بر اساس رزومه ارائه‌شده، دارای سابقه حضور در فعالیت‌های اجتماعی و جریان‌های انقلابی و گذراندن دوره‌های نظامی در سپاه پاسداران انقلاب اسلامی.",
    category: "سوابق اجتماعی",
  },
];

const values = [
  {
    number: "01",
    title: "توجه به ظرفیت بانوان",
    description:
      "توجه به نقش بانوان در عرصه‌های اجتماعی، اقتصادی و مدیریت شهری.",
  },
  {
    number: "02",
    title: "نگاه اقتصادی به شهر",
    description:
      "شناخت ظرفیت‌های بازرگانی و اقتصادی به‌عنوان بخشی از مسائل توسعه شهری.",
  },
  {
    number: "03",
    title: "مسئولیت‌پذیری اجتماعی",
    description:
      "توجه به ارتباط میان فعالیت اجتماعی، مشارکت شهروندان و مسائل شهر.",
  },
];

export default function Home() {
  return (
    <main dir="rtl">
      <div className="topline">
        <div className="container topline-inner">
          <span>تبریز، ایران</span>
          <span>پایگاه معرفی فعالیت‌ها و سوابق</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="صفحه اصلی">
            <span className="brand-mark">د</span>
            <span className="brand-text">
              <strong>رقیه دلیر اسمعیلی آذر</strong>
              <small>وب‌سایت رسمی</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="منوی اصلی">
            <a href="#about">درباره من</a>
            <a href="#resume">سوابق</a>
            <a href="#education">تحصیلات</a>
            <a href="#perspectives">حوزه‌های توجه</a>
          </nav>

          <a className="nav-cta" href="#contact">
            ارتباط با ما <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="red-dot" />
              معرفی سوابق و فعالیت‌ها
            </div>

            <h1>
              رقیه دلیر
              <br />
              <span>اسمعیلی آذر</span>
            </h1>

            <p className="hero-role">
              فعال سیاسی، اقتصادی و اجتماعی
            </p>

            <p className="hero-description">
              روایتی از تجربه در حوزه بانوان، فعالیت‌های اجتماعی
              و حضور در عرصه اقتصادی؛ با نگاهی به ظرفیت‌های
              انسانی و اقتصادی شهر تبریز.
            </p>

            <div className="hero-actions">
              <a className="button button-red" href="#about">
                آشنایی با سوابق <span>←</span>
              </a>
              <a className="button button-outline" href="#resume">
                مشاهده رزومه
              </a>
            </div>

            <div className="hero-bottom">
              <span className="iran-flag" aria-label="پرچم ایران">
                <i /><i /><i />
              </span>
              <span>تبریز · آذربایجان‌شرقی · ایران</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-top">
                <span>PROFILE / 01</span>
                <span className="portrait-line" />
              </div>

              <div className="portrait-image">
                <img
                  src="/images/delir.jpg"
                  alt="تصویر رقیه دلیر اسمعیلی آذر"
                />
              </div>

              <div className="portrait-caption">
                <span className="caption-index">01 / IR</span>
                <div>
                  <strong>رقیه دلیر اسمعیلی آذر</strong>
                  <small>فعالیت سیاسی، اقتصادی و اجتماعی</small>
                </div>
              </div>
            </div>

            <div className="floating-stamp">
              <span>از</span>
              <strong>تبریز</strong>
              <span>برای آینده شهر</span>
            </div>
            <div className="visual-square" />
          </div>
        </div>

        <div className="hero-footer">
          <div className="container hero-footer-inner">
            <span>زندگی‌نامه و سوابق</span>
            <span className="footer-rule" />
            <a href="#about">برای آشنایی بیشتر پایین بروید ↓</a>
          </div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="container intro-grid">
          <div className="section-kicker">
            <span className="section-number">01</span>
            <span>درباره من</span>
          </div>

          <div className="intro-content">
            <p className="overline">ABOUT / BIOGRAPHY</p>
            <h2>
              تجربه در مسیر
              <br />
              <span>فعالیت اجتماعی و اقتصادی</span>
            </h2>
            <p className="body-copy">
              رقیه دلیر اسمعیلی آذر، متولد تبریز، فعال سیاسی،
              اقتصادی و اجتماعی است. فعالیت‌های او بر اساس
              سوابق ارائه‌شده، حوزه‌هایی همچون امور بانوان،
              فعالیت حزبی و بازرگانی مواد شیمیایی را دربرمی‌گیرد.
            </p>
            <p className="body-copy">
              تحصیلات دانشگاهی در رشته شیمی و آشنایی با زبان
              انگلیسی، در کنار تجربه فعالیت اقتصادی و اجتماعی،
              بخش‌های مختلف سوابق حرفه‌ای او را تشکیل می‌دهند.
            </p>
            <div className="intro-signature">
              <span className="signature-mark">ر.د.ا</span>
              <span className="signature-rule" />
              <span>تبریز، آذربایجان‌شرقی</span>
            </div>
          </div>
        </div>
      </section>

      <section className="resume section" id="resume">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="overline">CAREER / EXPERIENCE</p>
              <h2>مروری بر سوابق</h2>
              <p className="heading-description">
                حوزه‌های اصلی فعالیت و تجربه‌های حرفه‌ای
              </p>
            </div>
            <span className="heading-aside">سوابق منتخب / ۰۴</span>
          </div>

          <div className="resume-grid">
            {experiences.map((item) => (
              <article className="resume-card" key={item.number}>
                <div className="resume-card-top">
                  <span className="resume-number">{item.number}</span>
                  <span className="resume-arrow">↗</span>
                </div>
                <p className="card-category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-bottom">
                  <span />
                  <span>سوابق حرفه‌ای</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education section" id="education">
        <div className="container education-grid">
          <div>
            <p className="overline">EDUCATION / LEARNING</p>
            <h2>
              دانش و یادگیری،
              <br />
              <span>بخشی از مسیر حرفه‌ای</span>
            </h2>
            <p className="education-description">
              تحصیلات و دانش زبانی از بخش‌های اعلام‌شده
              در رزومه خانم دلیر اسمعیلی آذر هستند.
            </p>
          </div>

          <div className="education-list">
            <article className="education-item" id="degree-chemistry">
              <span className="education-icon">ش</span>
              <div>
                <small>تحصیلات دانشگاهی</small>
                <h3>کارشناسی شیمی</h3>
                <p>رشته تحصیلی اعلام‌شده در رزومه</p>
              </div>
              <span className="education-index">01</span>
            </article>

            <article className="education-item">
              <span className="education-icon">EN</span>
              <div>
                <small>دانش زبانی</small>
                <h3>زبان انگلیسی</h3>
                <p>دانش‌آموخته زبان انگلیسی</p>
              </div>
              <span className="education-index">02</span>
            </article>
          </div>
        </div>
      </section>

      <section className="perspectives section" id="perspectives">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="overline">AREAS OF INTEREST</p>
              <h2>حوزه‌های مورد توجه</h2>
              <p className="heading-description">
                محورهایی برای معرفی زمینه‌های فعالیت و توجه اجتماعی
              </p>
            </div>
          </div>

          <div className="values-grid">
            {values.map((item) => (
              <article className="value-card" key={item.number}>
                <span className="value-number">{item.number}</span>
                <div className="value-divider" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="editorial-note">
            این بخش، حوزه‌های مرتبط با سوابق ارائه‌شده را معرفی
            می‌کند و به‌معنای اعلام برنامه رسمی یا تعهد انتخاباتی
            مشخص نیست.
          </p>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-box">
          <div className="contact-copy">
            <p className="overline">CONTACT / CONNECT</p>
            <h2>
              راه‌های ارتباطی
              <br />
              <span>و اطلاع‌رسانی</span>
            </h2>
            <p>
              برای درج اطلاعات تماس رسمی، اخبار، برنامه‌های
              اعلام‌شده و راه‌های ارتباطی، این بخش آماده تکمیل است.
            </p>
          </div>
          <div className="contact-action">
            <span className="contact-symbol">↗</span>
            <strong>ارتباط با دفتر</strong>
            <p>
              اطلاعات تماس پس از تأیید و دریافت از دفتر
              در این بخش منتشر خواهد شد.
            </p>
            <span className="contact-status">
              <i /> آماده تکمیل اطلاعات
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">د</span>
            <span className="brand-text">
              <strong>رقیه دلیر اسمعیلی آذر</strong>
              <small>وب‌سایت رسمی</small>
            </span>
          </a>
          <p>
            معرفی سوابق، فعالیت‌ها و دیدگاه‌های اعلام‌شده
          </p>
          <a href="#home" className="back-top">
            بازگشت به بالا ↑
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© تمامی حقوق این وب‌سایت محفوظ است.</span>
          <span>طراحی با رویکرد رسمی و هویت مستقل</span>
        </div>
      </footer>
    </main>
  );
}
