const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Heather Bliss Celebrant. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Registered Celebrant - Weddings, Funerals & Vow Renewals
        </p>
      </div>
    </footer>
  );
};

export default Footer;
