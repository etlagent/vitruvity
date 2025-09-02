export const metadata = {
    title: "Privacy Policy & Terms • Vitruvity",
    robots: { index: true, follow: true }
};

export default function Privacy() {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">Vitruvity Privacy Policy & Terms of Use</h1>
            <p className="text-slate-600 mb-8">Effective: [Month Year]</p>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="mb-3">We collect and store:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Account information:</strong> Email address and 4-digit PIN.</li>
                    <li><strong>Wellness data:</strong> Workout preferences, training goals, food logs, and any notes you add.</li>
                    <li><strong>Optional uploads:</strong> Meal photos.</li>
                    <li><strong>Technical data:</strong> Device type, browser, and usage timestamps for security and performance.</li>
                </ul>
                <p className="mt-3">Vitruvity does not collect continuous medical device data (e.g., glucose monitors, heart monitors).</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="mb-3">Your information is used to:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Display personal stats, insights, and history.</li>
                    <li>Personalize workouts and nutrition suggestions.</li>
                    <li>Maintain and improve Vitruvity services through aggregated, anonymized analytics.</li>
                </ul>
                <p className="mt-3">We do not sell personal data. Disclosure occurs only:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>When you choose to export/share,</li>
                    <li>When required by law, or</li>
                    <li>When using secure third-party providers (e.g., cloud hosting).</li>
                </ul>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">3. Data Ownership & Retention</h2>
                <p className="mb-3">You remain the owner of your personal data. Vitruvity acts as custodian.</p>
                <p className="mb-3">You may export or delete your account at any time. Deletion requests will be honored within 30 days, except for anonymized data we may retain for research or system performance.</p>
                <p>System backups are retained for security up to 90 days.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">4. Security</h2>
                <p className="mb-3">We use encryption and industry-standard safeguards to protect your data.</p>
                <p>However, no system is fully secure. By using Vitruvity, you acknowledge that breaches or unauthorized access, while unlikely, remain possible.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">5. User Rights</h2>
                <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Access your stored data,</li>
                    <li>Request corrections,</li>
                    <li>Restrict or object to processing,</li>
                    <li>Permanently delete your account,</li>
                    <li>File a complaint with your local data authority.</li>
                </ul>
                <p className="mt-3">Requests can be submitted to <a className="underline" href="mailto:privacy@vitruvity.com">privacy@vitruvity.com</a>.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">6. No Medical Advice</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Vitruvity is a wellness and lifestyle application only.</li>
                    <li>We do not provide medical advice, diagnosis, or treatment.</li>
                    <li>Information and insights are for informational purposes only.</li>
                    <li>You are solely responsible for your health decisions, and you should consult a qualified healthcare professional for medical guidance.</li>
                </ul>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">7. Third-Party Services</h2>
                <p className="mb-3">Vitruvity relies on third-party service providers (e.g., cloud hosting, analytics).</p>
                <p>We are not responsible for third-party privacy practices. If you connect Vitruvity with other apps or services, their terms will apply.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Vitruvity is provided "as is" and "as available."</li>
                    <li>We disclaim all warranties, express or implied, including fitness for a particular purpose.</li>
                    <li>Vitruvity is not liable for damages, losses, or injuries arising from your use of the service, reliance on insights, or third-party actions.</li>
                    <li>Your use of the platform is at your own risk.</li>
                </ul>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">9. Updates</h2>
                <p>This policy may be updated as needed. If changes are material, we will notify you via email or in-app. Continued use after changes means acceptance of the revised terms.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">10. Acceptance of Terms</h2>
                <p className="mb-3">By creating an account, logging meals, or otherwise using Vitruvity, you:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Confirm you are of legal age (or have a parent/guardian's consent if applicable).</li>
                    <li>Acknowledge that you have read and understood this Privacy Policy & Terms of Use.</li>
                    <li>Agree to be legally bound by these terms.</li>
                    <li>Accept that Vitruvity provides wellness insights only and does not provide medical advice.</li>
                    <li>Accept all risks associated with the use of the service and release Vitruvity from liability except where prohibited by law.</li>
                </ul>
                <p className="mt-3">If you do not agree, you must not use Vitruvity.</p>
            </section>

            <section className="py-4">
                <h2 className="text-xl font-semibold mb-3">11. Contact</h2>
                <p>For privacy questions or concerns:</p>
                <p className="mt-2">📧 <a className="underline" href="mailto:privacy@vitruvity.com">privacy@vitruvity.com</a></p>
            </section>
        </article>
    );
}
