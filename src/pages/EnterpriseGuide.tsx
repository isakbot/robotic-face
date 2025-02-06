import { Navbar } from "@/components/Navbar";

const EnterpriseGuide = () => {
  return (
    <div className="min-h-screen bg-[#FDE1D3]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 font-mono">
        <h1 className="text-3xl font-normal text-[#222222] mb-8">
          Your Enterprise Guide to Fine-Tuning Robotics Foundation Models
        </h1>
        
        <div className="prose prose-stone max-w-none space-y-6 text-[#222222]">
          <p>
            Here are the data requirements for fine-tuning based on advanced robotics foundation models, specifically tailored for scenarios where enterprises leverage their data, and other providers supply their fleet of robots to supplement the necessary sensor data and craft relevant synthetic data. You can set your readiness level at custom levels during the matching process. Data security and your intellectual property are protected under a licensing agreement. This approach simplifies the process and efficiently adapts AI to your unique operational context.
          </p>

          <div>
            <h2 className="text-xl font-normal text-[#222222] mt-8 mb-4">1. Focus on Task-Specific Data</h2>
            <p>
              Since the robotics developer will be handling the collection of sensor data, your primary focus as an enterprise should be on providing information that defines the specific tasks and objectives you want the robot to achieve, and tailored data to achieve this. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Demonstrations:</strong> High-quality recordings of expert human operators performing the desired tasks in your operational environment. These demonstrations provide valuable insights into successful task execution strategies and can significantly accelerate the fine-tuning process.</li>
              <li><strong>Task Descriptions:</strong> Detailed descriptions of the tasks, outlining the goals, constraints, and success criteria. The more specific and comprehensive the descriptions, the better we can tailor the AI's behavior to your needs.</li>
              <li><strong>Success/Failure Labels:</strong> Clear labels indicating whether a particular action or sequence of actions led to successful task completion in your specific context. This data helps the AI learn from both successes and failures, leading to more robust and reliable performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-normal text-[#222222] mt-8 mb-4">2. Visual Data for Contextualization</h2>
            <p>
              While we will gather the core sensor data, providing supplementary visual data can be beneficial for contextualizing the robot's environment and enhancing its perception capabilities. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>RGB Images:</strong> High-resolution images capturing the robot's workspace from various angles and under different lighting conditions. This helps the AI understand the visual layout of the environment and identify key objects and features.</li>
              <li><strong>Annotated Images:</strong> Images with labeled objects, keypoints, and semantic segmentation masks. This provides valuable ground truth for object recognition, pose estimation, and scene understanding, further refining the AI's perception.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-normal text-[#222222] mt-8 mb-4">3. Data Quality and Format</h2>
            <p>
              Maintaining high data quality is crucial for successful fine-tuning. Please ensure your data adheres to the following guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accuracy:</strong> Demonstrations should accurately reflect the desired task execution, and task descriptions should be clear and free from ambiguities.</li>
              <li><strong>Resolution:</strong> Visual data should have sufficient resolution to capture relevant details.</li>
              <li><strong>Format:</strong> Data should be provided in standard formats (e.g., images in JPEG or PNG format, task descriptions in a structured format like JSON or XML).</li>
              <li><strong>Metadata:</strong> Include relevant metadata, such as environmental conditions, task variations, and any specific instructions for the robot.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-normal text-[#222222] mt-8 mb-4">4. Ethical Considerations</h2>
            <p>
              When providing data, please ensure it aligns with ethical guidelines and best practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Privacy:</strong> Data should not include personally identifiable information or sensitive data without explicit consent.</li>
              <li><strong>Bias:</strong> Be mindful of potential biases in the data and strive for diverse and representative examples.</li>
              <li><strong>Safety:</strong> Demonstrations should prioritize safety and not endanger human operators or damage equipment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-normal text-[#222222] mt-8 mb-4">5. Data Licensing and Ownership</h2>
            <p>
              Your data will be used solely for the purpose of fine-tuning our robotics foundation models for your specific application. We will enter into a licensing agreement that clearly defines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Data Ownership:</strong> You retain ownership of your data.</li>
              <li><strong>Usage Rights:</strong> We are granted rights to use your data for fine-tuning and improving our models, but not for any other purpose.</li>
              <li><strong>Confidentiality:</strong> We will protect the confidentiality of your data and not share it with third parties.</li>
            </ul>
          </div>

          <p className="mt-8">
            By using this marketplace and providing your data according to these guidelines, you gain access to cutting-edge robotics AI technology and a streamlined fine-tuning process. We are committed to working closely with you to ensure the successful deployment of robots that meet your specific needs and optimize your operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseGuide;