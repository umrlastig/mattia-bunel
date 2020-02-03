(package-initialize)
(require 'org)


(defun pd-html-publish-to-html (plist filename pub-dir)
  (org-publish-org-to 'pd-html filename ".html" plist pub-dir))


(setq org-publish-project-alist
      '(("lastig_page"
	 :base-directory "./src"
	 :publishing-directory "./docs"
	 :publishing-function org-html-publish-to-html
	 :auto-sitemap nil)))

(org-mode)
(org-publish-project "lastig_page")

