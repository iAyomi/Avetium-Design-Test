export const Heading = ({ children, styles }: TypographyProps) => {
  return (
    <div className="text-6xl font-bold text-[#FFFFFF] leading-15">
      <h1 className={styles}>{children}</h1>
    </div>
  );
};

export const SubHeading = ({ children, styles }: TypographyProps) => {
  return (
    <div className="text-[#FFFFFF] font-medium text-lg leading-8">
      <h2 className={styles}>{children}</h2>
    </div>
  );
};

export const Paragraph = ({ children, styles }: TypographyProps) => {
  return (
    <div className="text-[#FFFFFF] font-semibold">
      <p className={styles}>{children}</p>
    </div>
  );
};

interface TypographyProps {
  children: React.ReactNode;
  styles?: string;
}
